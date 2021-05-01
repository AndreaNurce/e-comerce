<template>
  <div class="sceleton-container">
    <div>
      <div
        class="sceleton-wrapper"
        v-for="(quantity, index) in quantitys"
        :key="index"
        :style="{ width: contentWidth, height: contentHeight }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quantitys: {
      type: Number,
    },
    contentWidth: {
      type: String,
    },
    contentHeight: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.sceleton-container {
  div {
      display : flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    .sceleton-wrapper {
      background-color: red;
       margin :30px;


    }
  }
}
</style>