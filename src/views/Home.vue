<template>
  <section class="Home">
    <landing />
    <homeCollections />
  </section>
</template>

<script>
import landing from "@/components/home/landing.vue";
import homeCollections from "@/components/home/homeCollections.vue";
export default {
  data() {
    return {
      number: 3,
    };
  },
  components: {
    landing,
    homeCollections,
  },
};
</script>
