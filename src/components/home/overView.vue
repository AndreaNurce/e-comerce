<template>
  <section class="over-view">
        <skeleton
      v-if="loading"
      contentWidth="270px"
      :quantitys="number"
      contentHeight="390px"
    /> 
    <div class="wrapper"   v-if="!loading">
      <h1>product overview</h1>
      <div class="collections">
        <p
          :class="{ active: currCollection == 'all' }"
          @click="collectionFilter('all')"
        >
          All Products
        </p>
        <p
          v-for="(collection, index) in collections"
          @click="collectionFilter(collection)"
          :key="index"
          :class="{ active: currCollection == collection }"
        >
          {{ collection }}
        </p>
      </div>

      <products :products="state.filteredProducts" />
    </div>
  </section>
</template>

<script>
import products from "@/components/products.vue";
import skeleton from "@/components/skeleton.vue";
import axios from "axios";
export default {
  data() {
    return {
      state: this.$store.state,
      collections: null,
      currCollection: "all",
      loading :true,
      number :10,
    };
  },
  components: {
    products,
    skeleton, 
  },
  methods: {
    async getProducts() {
      await axios.get("http://localhost:8081/products").then(
        function (res) {
          this.$store.state.productData = res.data;
          this.collectionFilter("all");
          this.loading =false;
        }.bind(this)
      );
    },
    collectionFilter(collection) {
      this.currCollection = collection;
      this.$store.state.filteredProducts = this.state.productData.filter(
        (element) => {
          if (element.inCollection == collection) {
            return element;
          } else if (collection === "all") {
            return element;
          }
        }
      );
    },
    async getCollections() {
      await axios.get("http://localhost:8081/collections/list").then(
        function (res) {
          this.collections = res.data;
        }.bind(this)
      );
    },
  },
  created() {
    this.getCollections();
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    width: 90%;
    .collections {
      p {
        display: inline-block;
        padding: 5px;
        margin: 15px;
        cursor: pointer;
        color: gray;
        font-family: Poppins-Regular;
        font-size: 18px;
        line-height: 1.2;
        transition: $hoverEffect;
        &:hover {
          color: black;
          border-bottom: 1px solid black;
        }
      }
    }
    h1 {
      font-family: Poppins-Bold;
      font-size: 36px;
      line-height: 1.1;
      text-transform: uppercase;
    }
  }
}

.active {
  color: black !important;
  border-bottom: 1px solid black !important;
}
</style>>
