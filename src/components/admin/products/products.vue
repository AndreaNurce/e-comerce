<template>
  <div>
    <newProduct/>
    <editProduct/>
  </div>
</template>

<script>
import axios from "axios";
import newProduct from "@/components/admin/products/newProduct.vue";
import editProduct from "@/components/admin/products/editProducts.vue";
export default {
  components: {
    newProduct,
    editProduct,
  },
  data() {
    return {
      state: this.$store.state,
    };
  },
  methods: {
    async getProducts() {
      await axios.get("http://localhost:8081/products").then(res => console.log(res));
    },
  },created(){
      this.getProducts();
  }
};
</script>


<style lang="scss" scoped>
section{
  all : none;
}
</style>