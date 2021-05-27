<template>
  <section id="singleCollection">
    <div class="container">
      <h1>
        {{ params.name }}
      </h1>
      <products :products="products" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import products from "@/components/products.vue";
export default {
  components: {
    products,
  },
  data() {
    return {
      params: this.$route.params,
      products: null,
    };
  },
  methods: {
    getProducts(param) {
      axios.get(`http://localhost:8081/products/product/${param}`).then(
        function (res) {
          this.products = res.data;
          console.log(this.products);
        }.bind(this)
      );
    },
  },
  created() {
    this.getProducts(this.params.name);
  },
};
</script>

<style scoped  lang="scss">
#singleCollection {
  * {
    margin: 20px 0;
  }
  display: flex;
  justify-content: center;
  .container {
    width: 90%;
    h1 {
      font-size: 30px;
    }
  }
}
</style>