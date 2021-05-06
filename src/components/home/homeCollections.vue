<template>
  <section>
    <skeleton
      v-if="loading"
      contentWidth="370px"
      :quantitys="number"
      contentHeight="250px"
    />

    <div v-if="!loading" class="container-wrapper">
      <div
        v-for="(data, index) in res.collectionData"
        :key="index"
        class="container"
      >
        <img :src="'data:image/jpg;base64,' + data.image" alt="" />
        <div class="effect"></div>
        <h1>{{ data.name }}</h1>
        <p>{{ data.tittle }}</p>
        <h2>Shop Now</h2>
      </div>
    </div>
  </section>
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
      res: this.$store.state,
      loading: true,
      number: 3,
    };
  },
  methods: {
    async getCollections() {
      await axios.get("http://localhost:8081/collections").then(
        function (res) {
          this.res.collectionData = res.data;
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

<style scoped lang="scss">
section {
  margin: 100px 0;
  .container-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 5px;
    .container {
      height: 250px;
      width: 370px;
      position: relative;
      border: 1px solid #e6e6e6;
      transition: $hoverEffect;
      cursor: pointer;

      h1 {
        font-family: Georgia, "Times New Roman", Times, serif;
        font-size: 30px;
        padding: 10px 40px;

        line-height: 1.1;
        transition: $hoverEffect;
      }
      p {
        padding: 10px 40px;
        font-family: Georgia, "Times New Roman", Times, serif;
        font-weight: 400;
        font-size: 16px;
        transition: $hoverEffect;
      }
      h2 {
        z-index: 0;
        bottom: -40px;
        left: 40px;
        color: white;
        padding-bottom: 10px;
        transition: $hoverEffect;
        font-family: Georgia, "Times New Roman", Times, serif;
        position: absolute;
      }
      h2::before {
        content: "";
        width: 12px;
        height: 2px;
        background-color: white;
        position: absolute;
        bottom: 0;
        transition: all 0.8s ease 0s;
      }
      .effect {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        transition: $hoverEffect;
      }
      img {
        position: absolute;
        z-index: -1;
        width: 100%;
      }

      &:hover h1,
      &:hover p {
        color: white;
      }
      &:hover .effect {
        background-color: rgba(103, 117, 214, 0.8);
      }
      &:hover h2 {
        bottom: 40px;
      }
      &:hover h2::before {
        transition: all 0.8s ease 0s;
        width: 100%;
      }
    }
  }
}
</style>