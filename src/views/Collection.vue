<template>
  <section id="singleCollection">
    <div class="container">
      <h1>
        {{ params.name }}
      </h1>
      <hr>
      <skeleton
        v-if="loading"
        contentWidth="270px"
        :quantitys="number"
        contentHeight="390px"
      />
      <products v-if="!loading" :products="products" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import skeleton from "@/components/skeleton.vue";
import products from "@/components/products.vue";
export default {
  components: {
    products,
    skeleton,
  },
  data() {
    return {
      params: this.$route.params,
      products: null,
      loading: true,
      number: 10,
    };
  },
  methods: {
    getProducts(param) {
      axios.get(`http://localhost:8081/products/product/${param}`).then(
        function (res) {
          this.products = res.data;
          console.log(this.products);
          this.loading = false;
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