<template>
  <div class="skeleton-container">
    <div>
      <div
        class="skeleton-wrapper"
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
.skeleton-container {
  div {
      display : flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    .skeleton-wrapper {
      background-color: red;
       margin :30px;


    }
  }
}
</style>