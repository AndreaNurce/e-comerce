<template>
  <div class="collection-form">
    <controller />
  </div>
</template>

<script>
import controller from "@/components/admin/collections/controller.vue";
export default {
  components: {
    controller,
  },
  unmounted() {
    this.$store.state.collectionView = "";
  },
};
</script>
