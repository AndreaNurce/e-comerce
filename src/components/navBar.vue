<template>
  <div>
    <header>
      <div class="wrapper">
        <div class="left-side">
          <div class="logo">
            <p><b> brezzi </b>Store</p>
          </div>
          <div class="menu">
            <ul>
              <li @click="router.push('/')">Home</li>
              <li>Shop</li>
              <li>Features</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div class="right-side">
          <i @click="menuOpened('Search')" class="fas fa-search"></i>
          <i @click="menuOpened('Chart')" class="fas fa-shopping-cart"></i>
          <i @click="menuOpened('Favourite')" class="far fa-heart"></i>
          <i
            @click="router.push('/admin'), store.commit('closeMenu')"
            class="fas fa-user-circle"
          ></i>
        </div>
      </div>
    </header>
    <div id="menu">
      <navigation />
    </div>
  </div>
</template>

<script>
import navigation from "@/components/navigation.vue";

export default {
  components: {
    navigation,
  },
  data() {
    return {
      state: this.$store.state,
      router: this.$router,
      store: this.$store,
    };
  },
  methods: {
    menuOpened(current) {
      this.state.menuVisible = true;
      this.$store.commit("openMenu", current);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  @include flex(center);
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  z-index: 1;
  .wrapper {
    @include flex(space-between);
    width: 90%;
    height: 80px;
    font-family: $font1;
    .left-side {
      @include flex(space-between);
      width: 62%;
      flex-wrap: nowrap;
      .logo {
        font-size: 26px;
      }
      ul {
        li {
          cursor: pointer;
          list-style: none;
          display: inline-block;
          padding: 10px;
          font-size: 20px;
          transition: $hoverEffect;
          &:hover {
            color: $iconHover;
          }
        }
      }
    }
    .right-side {
      .fas,
      .far {
        padding: 10px;
        transition: $hoverEffect;
        cursor: pointer;
        font-size: 18px;
        &:hover {
          color: $iconHover;
        }
        &:last-child {
          margin-right: -10px;
        }
      }
    }
  }
}

#menu {
  position: fixed;
  display: flex;
  right: 0;
  justify-content: center;
  top: 80px;
  margin-right: -300px;
  width: 300px;
  background-color: white;
  height: 100%;
  transition: $hoverEffect;
  z-index: 2;
}
</style>