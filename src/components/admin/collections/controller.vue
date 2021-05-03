<template>
  <div class="controller-wrapper">
    <div @click="showNewItemContoller()" class="new-collection">
      <i class="fas fa-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showNewItemContoller() {
      this.$store.state.collectionView = "newCollection";
    },
  },
};
</script>

<style lang="scss" scoped>
.controller-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fas {
  padding: 15px;
  border-radius: 60px;
  background-color: rgb(230, 230, 230);
  cursor: pointer;
}
.fa-plus {
  font-size: 16px;
}
</style>