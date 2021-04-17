<template>
    <section>
        <div class="menu">
            <ul>
                <li @click="editor = 'Landing'">Landing Page</li>
                <li @click="editor = 'Collections'">Collections</li>
                <li @click="editor = 'Products'">Products</li>
            </ul>
        </div>
        <div class="handler-wrapper" >
            <collections v-if="editor =='Landing'"/>
            <landing v-if="editor =='Collections'"/>
            <products v-if="editor =='Products'" />
        </div>
    </section>
</template>

<script>
import collections from '@/components/collections.vue'
import landing from '@/components/landing.vue'
import products from '@/components/products.vue'
export default {
    data() {
        return {
            editor : null
        }
    },components:{
        collections,
        landing,
        products,
    }

}
</script>

<style>

</style>