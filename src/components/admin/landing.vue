<template>
  <div class="container">
      <h1>Edit Landing Page</h1>
  <div class="landing-form">
    <form>
      <input
        placeholder="Set a new tittle"
        v-model="tittle"
        type="text"
        name="tittle"
        autocomplete="off"
      />
      <br />
      <input
        placeholder="Set a new description"
        v-model="subTittle"
        type="text"
        name="subTittle"
        autocomplete="off"
      />

    </form>
    <div>
      <img :src="'data:image/jpg;base64,' + image" alt="" />
      <br /><br /><br /><br />
      <label for="files" class="btn">Select new Image</label>
      <input
        id="files"
        style="visibility: hidden"
        ref="file"
        type="file"
        name="image"
      />
    </div>

  </div>
      <br /><br />
      <button  @click.prevent="updateContent()" align="center">Save changes</button>
      <loading v-if="loading" />
  </div>
</template>

<script>
import axios from "axios";
import loading from "@/components/loading.vue";
export default {
  components: {
    loading,
  },
  data() {
    return {
      tittle: "",
      subTittle: "",
      image: "",
      loading: false,
    };
  },
  methods: {
    async updateContent() {
      this.loading = true;
      let fd = new FormData();

      fd.append("tittle", this.tittle);
      fd.append("subTittle", this.subTittle);
      fd.append("image", this.$refs.file.files[0]);
      await axios
        .post("http://localhost:8081/landing-page/update", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(
          function (res) {
            this.loading = false;
            this.image = res.data[0].image;
            this.tittle = res.data[0].tittle;
            this.subTittle = res.data[0].subTittle;
          }.bind(this)
        );
    },
    async getData() {
      await axios.get("http://localhost:8081/landing-page").then(
        function (res) {
          this.image = res.data[0].image;
          this.tittle = res.data[0].tittle;
          this.subTittle = res.data[0].subTittle;
        }.bind(this)
      );
    },
  },
  created() {
    this.getData();
  },
};
</script>


<style lang="scss" scoped>
.container{
.landing-form {
  position: relative;
  font-family: $font1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  form {
    padding: 20px;
    width: 340px;
    text-align: center;
        min-width : 50%;
    width : 50%;

    input[type="text"] {
      padding: 6px 16px;
      width: 250px;
      font-size: 18px;
      margin: 15px;
      border-top: none;
      border-left: none;
      border-right: none;
      background-color: none;
      text-align: center;
      &:focus {
        outline: none;
      }
    }


  }

  div {
    min-width : 50%;
    width : 50%;
    img {
      width: 200px;
    }
    label {
      padding: 13px;
      font-size: 14px;
      margin: 15px;
      border: 1px dotted;
      cursor:pointer;
    }
  }
}
    h1 {
      margin-bottom: 40px;
      text-align: center;
    }
    button {
      padding: 12px 16px;
      text-align: center;
      border: none;
      cursor: pointer;
      background-color: $iconHover;
      color: white;
      font-weight: 800;
      margin-left:50%;
      transform : translateX(-50%);
      margin-top: 40px;

    }

}
</style>