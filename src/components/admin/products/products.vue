<template>
  <div class="wrapper">
    <div class="container-wrapper" v-for="(data, index) in res" :key="index">
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
    <div  v-if="!loading" @click="editor='new'" class="new-product">
      <i class="fas fa-plus"></i>
    </div>
    <skeleton
      v-if="loading"
      contentWidth="240px"
      :quantitys="number"
      contentHeight="290px"
    />
    <newProduct v-if="editor == 'new'" />
    <editProduct v-if="show" />
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
      editor : ''
    };
  },
  methods: {
    async getProducts() {
      await axios.get("http://localhost:8081/products").then(
        function (res) {
          this.res = res.data;
          this.loading = false;
        }.bind(this)
      );
    }, async dropProduct(id){
      await axios.delete('http://localhost:8081/products/dropProduct', {params : {
        id
      }}).then(function(res){
        this.res = res.data
      }.bind(this))
    }
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
}
</style>