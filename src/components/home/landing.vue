<template>
  <section>
    <skeleton v-if="loading" contentWidth="90%" :quantitys='number' contentHeight="80vh"/>

    <div v-if="!loading">
    <img :src="'data:image/jpg;base64,' + image" alt="" />
    <div class="container">
      <div>
        <h1>{{ tittle }}</h1>
        <h2>{{ subTittle }}</h2>
        <a>Shop now</a>
      </div>
    </div>
       </div>
  </section>
</template>

<script>
import axios from "axios";
import skeleton from '@/components/skeleton.vue'
export default {
  components:{
    skeleton
  },
  data() {
    return {
      image: "",
      tittle: "",
      subTittle: "",
      loading:false,
      number : 1
    };
  },
  methods: {
    async getData() {
      this.loading =true;
      await axios.get("http://localhost:8081/landing-page").then(
        function (res) {
          this.image = res.data.image;
          this.tittle = res.data.tittle;
          this.subTittle = res.data.subTittle;
      this.loading =false;

        }.bind(this)
      );
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang="scss">
section {
  position: relative;
  width: 100vw;

  img {
    width: 100vw;
    position: absolute;
    z-index: -1;
  }
  .container {
    height: 46vw;
    padding: 0 5%;
    display: flex;
    align-items: center;
    div {
      h1 {
        font-family: Poppins-Regular;
        font-size: 28px;
        line-height: 1.2857;
        color: #333;
        text-transform: uppercase;
      }
      h2 {
        font-family: PlayfairDisplay-Bold;
        font-size: 55px;
        line-height: 1.1;
        text-transform: uppercase;
        color: #333;
        padding-bottom: 43px;
        padding-top: 19px;
      }
      a {
        font-family: Poppins-Medium;
        font-size: 16px;
        font-weight: 800;
        line-height: 1.466667;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        border-radius: 40px;
        background-color: $iconHover;
        color: #fff;
        padding: 15px 24px;
        cursor: pointer;
      }
    }
  }
}
</style>