<template>
  <div id="store">
    <nav-bar v-if="!mobile"> </nav-bar>
    <nav-bar-mobile v-if="mobile"> </nav-bar-mobile>
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
    this.$store.state.menuVisible = false;
  }else{
    this.mobile = false
  }
}
  },
  created () {
    window.addEventListener('resize', this.handleNav);
    this.handleNav();
  },
    unmounted () {
    window.addEventListener('resize', this.handleNav);
  }

}
</script>

<style scoped lang="scss">

#wrapper{
  height: 100vh;
  background-color:red;
  transition:$hoverEffect;
}

</style>