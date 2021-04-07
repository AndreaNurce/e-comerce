<template>
    <section class="Home" >
        <nav-bar/>
        <nav-bar-mobile/>
    </section>
</template>

<script>
import navBar from '@/components/navBar.vue'
import navBarMobile from '@/components/navBarMobile.vue'
export default {
    components:{
        navBar,
        navBarMobile,
    }

}
</script>

<style>

</style>