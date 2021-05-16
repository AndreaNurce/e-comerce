<template>
  <section class="Home">
    <landing />
    <homeCollections />
    <overView />
  </section>
</template>

<script>
import landing from "@/components/home/landing.vue";
import homeCollections from "@/components/home/homeCollections.vue";
import overView from "@/components/home/overView.vue";
export default {
  data() {
    return {
      number: 3,
    };
  },
  components: {
    landing,
    homeCollections,
    overView,
  },
};
</script>

<style lang="scss" scoped>
</style>
