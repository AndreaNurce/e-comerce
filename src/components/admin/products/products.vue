<template>
  <div class="wrapper">
    <div
      class="container-wrapper"
      v-for="(data, index) in state.productData"
      :key="index"
    >
      <div v-if="!loading" class="container">
        <p>{{ data.name }}</p>
        <img :src="'data:image/jpg;base64,' + data.image" alt="" />
      </div>
      <div v-if="!loading" class="buttons">
        <p @click="dropProduct(data.id)"><i class="fas fa-minus"></i></p>
        <p @click="showProductEditor(data.id)">
          <i class="fas fa-pencil-alt"></i>
        </p>
      </div>
    </div>
    <div v-if="!loading" @click="(editor = 'new' ,displayEditor =true )" class="new-product">
      <i class="fas fa-plus"></i>
    </div>
    <skeleton
      v-if="loading"
      contentWidth="240px"
      :quantitys="number"
      contentHeight="290px"
    />
    <editProduct v-if="show" />

    <div @click.self="displayEditor=false" v-if="displayEditor" class="editor">
      <div class="editor-container">
        <newProduct v-if="editor == 'new'" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import newProduct from "@/components/admin/products/newProduct.vue";
import editProduct from "@/components/admin/products/editProducts.vue";
import skeleton from "@/components/skeleton.vue";
export default {
  components: {
    newProduct,
    editProduct,
    skeleton,
  },
  data() {
    return {
      state: this.$store.state,
      res: null,
      show: false,
      loading: true,
      number: 8,
      editor: "",
      displayEditor : false
    };
  },
  methods: {
    async getProducts() {
      await axios.get("http://localhost:8081/products").then(
        function (res) {
          this.$store.state.productData = res.data;

          this.loading = false;
          console.log(res);
        }.bind(this)
      );
    },
    async dropProduct(id) {
      await axios
        .delete("http://localhost:8081/products/dropProduct", {
          params: {
            id,
          },
        })
        .then(
          function (res) {
            this.$store.state.productData = res.data;
          }.bind(this)
        );
    },
    showProductEditor() {
      this.displayEditor = true;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>


<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  .container-wrapper {
    padding: 0 15px 30px 15px;
    .container {
      padding: 15px;
      text-align: center;
      margin: 0px 15px 8px 15px;
      background-color: rgb(248, 248, 248);
      p {
        padding-bottom: 8px;
      }

      img {
        width: 180px;
      }
    }
    .buttons {
      display: flex;
      justify-content: space-around;
      p:last-child {
        background-color: rgb(179, 208, 253);
      }
      p {
        background-color: rgb(255, 190, 190);
        padding: 8px 16px;
        border-radius: 20px;
        cursor: pointer;
      }
    }
  }
  .new-product {
    background-color: rgb(248, 248, 248);
    width: 210px;
    height: 283px;
    margin: 0px 30px 0px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .fas {
      font-size: 40px;
    }
  }
  .editor {
    position: fixed;
    height: 90%;
    width: 80%;
    background-color: rgba(0, 0, 0, 0.548);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .editor-container {
      background-color: white;
      height: 80%;
      width: 80%;
    }
  }
}
</style>