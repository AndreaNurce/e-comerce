<template>
  <div id="store">
    <nav-bar class="stickyHeader" v-if="!mobile"> </nav-bar>
    <nav-bar-mobile class="stickyHeader" v-if="mobile"> </nav-bar-mobile>
    <div id="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue'
import navBarMobile from '@/components/navBarMobile.vue'
export default {
    components:{
        navBar,
        navBarMobile,
    }, data() {
    return {
      mobile : false,
    }
  },
  methods: {
    handleNav(){
  if(window.innerWidth <= 1100 ){
    this.mobile = true;
  }else{
    this.mobile = false
  }
    this.$store.state.menuVisible = false;
    this.$store.commit('showMenu')
}
  },
  mounted () {
    window.addEventListener('resize', this.handleNav);
    this.handleNav();
  },
    unmounted () {
    window.addEventListener('resize', this.handleNav);
  }

}
</script>

<style scoped lang="scss">
.store{
position:relative;
}


#wrapper{
  height: 200vh;
  background-color:red;
  transition:$hoverEffect;
  margin-top:80px;
}

</style>