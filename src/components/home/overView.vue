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
        <div
          class="product-wrapper"
          v-for="product in products"
          :key="product.id"
        >
          <div class="image-contaier">
            <img
              class="img"
              :src="'data:image/jpg;base64,' + product.image"
              alt=""
            />
            <p>Quick view</p>
          </div>

          <div class="fav">
            <p>{{ product.name }}</p>
            <i class="fas fa-heart"></i>
          </div>
          <p>${{ product.price }}</p>
        </div>
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
      .product-wrapper {
        margin: 15px;
        .image-contaier {
          width: 270px;
          height: 334px;
          overflow: hidden;
          position: relative;

          &:hover > img {
            transform: scale(1.15);
          }
          &:hover > p {
            margin-bottom: 20px;
          }

          img {
            width: 100%;
            height: 100%;
            position: absolute;
            transition: all 0.5s ease;
          }
          p {
            position: absolute;
            bottom: 0;
            margin-bottom: -100px;
            margin-left: 50%;
            transform: translateX(-50%);
            transition: $hoverEffect;
            font-family: Poppins-Regular;
            font-size: 16px;
            line-height: 1.466667;
            background-color: #fff;
            border-radius: 20px;
            padding: 8px 15px;
            font-weight: 600;
            cursor: pointer;
            &:hover {
              background-color: rgb(41, 41, 41);
              color: white;
            }
          }
        }
        .fav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          p {
            font-family: Poppins-Regular;
            font-size: 14px;
            line-height: 1.466667;
            color: #999;
            position: relative;
          }
          .fas {
            color: rgb(199, 199, 199);
            cursor: pointer;
            transition: $hoverEffect;
            &:hover {
              color: $iconHover;
            }
          }
        }
        p {
          font-family: Poppins-Regular;
          font-size: 14px;
          line-height: 1.466667;
          letter-spacing: 1px;
          color: #666;
        }
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
</style>>
