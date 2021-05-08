<template>
<section>
    <newProduct v-if="state.productsMenu == 'newProduct'" />
</section>
</template>

<script>
import newProduct from '@/components/admin/products/newProduct.vue'
export default {
    components:{
        newProduct
    },data(){
        return {
            state : this.$store.state
        }
    }
    
}
</script>


<style lang="scss" scoped>
    
</style>