<template>
  <div class="controller-wrapper">
    <div class="container-wrapper" v-for="(data, index) in res" :key="index">
      <div v-if="!loading" class="container">
        <p>{{ data.name }}</p>
        <img :src="'data:image/jpg;base64,' + data.image" alt="" />
      </div>
      <div v-if="!loading" class="buttons">
        <p><i class="fas fa-minus"></i></p>
        <p><i class="fas fa-pencil-alt"></i></p>
      </div>
    </div>
    <skeleton
      v-if="loading"
      contentWidth="240px"
      :quantitys="number"
      contentHeight="240px"
    />
    <div @click="showNewItemContoller()" class="new-collection">
      <i class="fas fa-plus"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import skeleton from "@/components/skeleton.vue";

export default {
  components: {
    skeleton,
  },
  data() {
    return {
      res: Object,
      loading: true,
      number: 3,
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
          this.loading = false;
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
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  display: flex;

  .container-wrapper {
    .container {
      text-align: center;
      padding: 15px;
      margin: 0px 15px 8px 15px;
      background-color: rgb(248, 248, 248);
      p {
        padding-bottom: 8px;
      }

      img {
        width: 200px;
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
  .new-collection {
    .fas {
      padding: 8px;
      margin: 8px;
      border-radius: 60px;
      background-color: rgb(230, 230, 230);
      cursor: pointer;
    }
    .fa-plus {
      font-size: 16px;
    }
  }
}
</style>