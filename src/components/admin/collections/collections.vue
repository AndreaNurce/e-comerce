<template>
  <div class="collection-form">
    <div class="controller">
      <controller />
    </div>
    <div class="view">
      <View />
    </div>
  </div>
</template>

<script>
import View from "@/components/admin/collections/View.vue";
import controller from "@/components/admin/collections/controller.vue";
export default {
  components: {
    View,
    controller,
  },
  unmounted() {
    this.$store.state.collectionView = ""
  },
};
</script>


<style lang="scss" scoped>
.collection-form {
  .view {
    margin: 40px 0;
  }
}
</style>