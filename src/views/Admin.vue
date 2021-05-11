<template>
  <section>
    <div class="menu">
      <ul>
        <li
          @click="editor = 'Landing'"
          :class="{ active: editor == 'Landing' }"
        >
          Landing Page
        </li>
        <li
          @click="editor = 'Collections'"
          :class="{ active: editor == 'Collections' }"
        >
          Collections
        </li>
        <li
          @click.self="editor = 'Products'"
          :class="{ active: editor == 'Products' }"
        >
          Products
        </li>
      </ul>
    </div>
    <div class="handler-wrapper">
      <collections v-if="editor == 'Collections'" />
      <landing v-if="editor == 'Landing'" />
      <products v-if="editor == 'Products'" />
    </div>
  </section>
</template>

<script>
import collections from "@/components/admin/collections/collections.vue";
import landing from "@/components/admin/landing.vue";
import products from "@/components/admin/products/products.vue";
export default {
  data() {
    return {
      state: this.$store.state,
      editor: "Landing",
      subList: false,
    };
  },
  components: {
    collections,
    landing,
    products,
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;

  .menu {
    background-color: rgb(122, 145, 180);
    position: sticky;
    top: 80px;
    min-width: 200px;
    width: 20%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 18px;
      width: 100%;
      li {
        cursor: pointer;
        padding: 8px;
        list-style: none;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        overflow: hidden;
        width: 90%;
        color: white;
        font-weight: 500;
        i {
          position: absolute;
          right: 30px;
        }
        ul {
          transition: $hoverEffect;
          overflow: hidden;
        }
      }
    }
  }

  .handler-wrapper {
    width: 80%;
  }
}

.active {
  background-color: rgb(93, 116, 150);
}
.activeTag {
  background-color: rgb(57, 83, 119);

}
</style>>
