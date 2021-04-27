<template>
  <div class="landing-form">
    <form @submit.prevent="datas()">
      <input v-model="tittle" type="text" name="tittle" />
      <input v-model="subTittle" type="text" name="subTittle" />
      <input ref="file" type="file" name="image" />
      <button>Update</button>
    </form>
  </div>
  <img :src="image" alt="">
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tittle: "",
      subTittle: "",
      image: "",
    };
  },
  methods: {
    async datas() {
      let fd = new FormData();

      fd.append("tittle", this.tittle);
      fd.append("subTittle", this.subTittle);
      fd.append("image", this.$refs.file.files[0]);
      await axios.post("http://localhost:8081/test-files", fd,{
         headers: {
      'Content-Type': 'multipart/form-data'
    }
      });
    },
  },created(){
  axios.get("http://localhost:8081/test-files").then(function(res)  {
    console.log(res.data.items[0].img.data.data);

    let base64String = btoa(
            String.fromCharCode.apply(null, new Uint8Array(res.data.items[0].img.data.data))
          );
   this.image =  "data:image/jpg;base64," + base64String;
    
    }.bind(this));
  }
};
</script>


<style lang="scss" scoped>
</style>