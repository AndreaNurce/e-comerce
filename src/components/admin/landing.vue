<template>
  <div class="landing-form">
    <form @submit.prevent="updateContent()">
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
      <br /><br />
      <label for="files" class="btn">Select new Image</label>
  <input id="files" style="visibility:hidden;" ref="file" type="file" name="image">
      <br /><br />
      <button align="center">Save changes</button>
    <loading v-if="loading"/>
    </form>

  </div>
  <!-- <img :src="'data:image/jpg;base64,' + image" alt="" /> -->
</template>

<script>
import axios from "axios";
import loading from '@/components/loading.vue'
export default {
  components:{
    loading
  },
  data() {
    return {
      tittle: "",
      subTittle: "",
      image: "",
      loading:false
    };
  },
  methods: {
    async updateContent() {
      this.loading = true
      let fd = new FormData();

      fd.append("tittle", this.tittle);
      fd.append("subTittle", this.subTittle);
      fd.append("image", this.$refs.file.files[0]);
      await axios.post("http://localhost:8081/landing-page/update", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(function(){this.loading = false}.bind(this));
    },
  },
};
</script>


<style lang="scss" scoped>
.landing-form {
  font-family:$font1 ;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5vh 0;
  form {
    padding: 20px;
    width: 340px;
    text-align: center;
    input[type="text"] {
      padding: 6px 16px;
      width: 250px;
      font-size: 18px;
      margin: 15px;
      border-top: none;
      border-left: none;
      border-right: none;
      background-color: none;
      text-align:center;
      &:focus{
    outline: none;
      }
    }
    label {
      padding:  13px;
      font-size: 14px;
      margin: 15px;
      border: 1px dotted;

    }
    button {
      padding: 12px 16px;
      text-align: center;
      border: none;
      cursor: pointer;
      background-color: $iconHover;
      color: white;
      font-weight:800;

    }
  }
}
</style>