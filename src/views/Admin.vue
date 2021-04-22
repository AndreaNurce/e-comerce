<template>
  <section>
    <div class="menu">
      <ul>
        <li @click="editor = 'Landing'">Landing Page</li>
        <li @click="editor = 'Collections'">Collections</li>
        <li @click="editor = 'Products'">Products</li>
      </ul>
    </div>
    <div class="handler-wrapper">
      <collections v-if="editor == 'Landing'" />
      <landing v-if="editor == 'Collections'" />
      <products v-if="editor == 'Products'" />
    </div>
  </section>
</template>

<script>
import collections from "@/components/admin/collections.vue";
import landing from "@/components/admin/landing.vue";
import products from "@/components/admin/products.vue";
export default {
  data() {
    return {
      editor: null,
    };
  },
  components: {
    collections,
    landing,
    products,
  },
};
</script>

<style lang="scss" scoped>
.menu {
min-width:200px;
  width: 20%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  ul {
        display: flex;
  align-items: center;
  flex-direction: column;
    padding: 10px;

    li {
      cursor: pointer;
      padding: 8px;
      list-style: none;
      font-family:Verdana, Geneva, Tahoma, sans-serif;
      overflow: hidden;
    width: 90%;

    }
  }
}

.handler-wrapper {
  width: 80%;
}
</style>>
