<template>
  <section class="over-view">
    <div class="wrapper">
      <h1>product overview</h1>
      <div class="collections">
        <p @click="collectionFilter('all')">All Products</p>
        <p
          v-for="(collection, index) in collections"
          @click="collectionFilter(collection)"
          :key="index"
        >
          {{ collection }}
        </p>
      </div>

      <div class="products">
          <transition-group name="fade">
          
        <img
        class="img"
          v-for="product in products"
          :key="product.id"
          :src="'data:image/jpg;base64,' + product.image"
          alt=""
        />
          </transition-group>

      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      state: this.$store.state,
      products: null,
      collections: null,
      currColleciton: "all",
    };
  },
  methods: {
    async getProducts() {
      await axios.get("http://localhost:8081/products").then(
        function (res) {
          this.$store.state.productData = res.data;
          this.collectionFilter("all");
        }.bind(this)
      );
    },
    collectionFilter(collection) {
        this.products = null;
      this.products = this.state.productData.filter((element) => {
        if (element.inCollection == collection) {
          return element;
        } else if (collection === "all") {
          return element;
        }
      });

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
    .products {
      display: flex;
      flex-wrap: wrap;

      img {
        width: 100px;
        padding: 10px;
        margin: 10px;
    transition : all 0.5s ease;

      }
    }
    .collections {
      p {
        display: inline-block;
        padding: 5px;
        margin: 5px;
        cursor: pointer;
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

.fade-enter-active , .fade-leave-active{
    opacity :0;
    transition : all 0.5s;

}

.fade-enter , .fade-leave{
    opacity : 1;
        transition : all 0.5s;


}
</style>>
