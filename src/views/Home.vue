<template>
    <section class="Home" >
      <header>
        <nav-bar v-if="!mobile"> </nav-bar>
        <nav-bar-mobile v-if="mobile"> </nav-bar-mobile>
      </header>
      
    </section>
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
    this.mobile = true
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

<style>

</style>