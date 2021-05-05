<template>
  <div class="view-wrapper">
    <editCollection/>
    <newCollection/>
  </div>
</template>

<script>
import editCollection from '@/components/admin/collections/editCollection.vue'
import newCollection from '@/components/admin/collections/newCollection.vue'
export default {
  components: {
    editCollection,
    newCollection,
  },
};
</script>

