<template>
  <div class="products">
    <div class="product-wrapper" v-for="product in products" :key="product.id">
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
        <i
          @click="fav(product.id)"
          :class="{ active: favArray.includes(product.id) }"
          class="fas fa-heart"
        ></i>
      </div>
      <p>${{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favArray: [],
    };
  },
  props: {
    products: {
      required: true,
    },
  },
  methods: {
    fav(id) {
      if (!localStorage.getItem("fav")) {
        this.favArray.push(id);
        localStorage.setItem("fav", JSON.stringify(this.favArray));
      } else {
        this.favArray = JSON.parse(localStorage.getItem("fav"));
        if (this.favArray.includes(id)) {
          let index = this.favArray.indexOf(id);
          this.favArray.splice(index ,1);
        } else {
          this.favArray.push(id);
        }
        localStorage.setItem("fav", JSON.stringify(this.favArray));
      }
    },
  },
  created() {
    this.favArray = JSON.parse(localStorage.getItem("fav"));
  },
};
</script>

<style scoped lang='scss'>
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
.active {
  color: $iconHover !important;
}
</style>