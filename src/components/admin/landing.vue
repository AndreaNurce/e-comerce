<template>
  <div class="landing-form">
    <form @submit.prevent="datas()">
      <input v-model="tittle" type="text" name="tittle" />
      <input v-model="subTittle" type="text" name="subTittle" />
      <input ref="file" type="file" name="image"/>
      <button>Update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tittle: "",
      subTittle: "",
    };
  },
  methods: {
    datas() {
      let fd = new FormData();

      fd.append("tittle", this.tittle);
      fd.append("subTittle", this.subTittle);
      fd.append("image", this.$refs.file.files[0]);
      axios
        .post("http://localhost:8081/test-files", fd)
        .then(function () {
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
  },
};
</script>


<style lang="scss" scoped>
</style>