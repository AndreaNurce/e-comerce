<template>
  <div class="controller-wrapper">
    <div class="container" v-for="(data, index) in res" :key="index">
      <p>{{data.name}}</p>
      <img :src="'data:image/jpg;base64,' + data.image" alt="" />
    </div>

    <div @click="showNewItemContoller()" class="new-collection">
      <i class="fas fa-plus"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      res: Object,
    };
  },
  methods: {
    showNewItemContoller() {
      this.$store.state.collectionView = "newCollection";
    },
    async getCollections() {
      await axios.get("http://localhost:8081/collections").then(
        function (res) {
          this.res = res.data;
        }.bind(this)
      );
    },
  },
  created() {
    this.getCollections();
  },
};
</script>

<style lang="scss" scoped>
.controller-wrapper {
  font-family: $font1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x:auto ;
}
.container{
  text-align:center;
  padding : 15px;
  margin:8px;
  background-color: rgb(248, 248, 248);
}
  p{
    padding-bottom:8px;
  }
.fas {
  padding: 8px;
  margin:8px;
  border-radius: 60px;
  background-color: rgb(230, 230, 230);
  cursor: pointer;
}
.fa-plus {
  font-size: 16px;
}
img {
  width: 200px;
}
</style>