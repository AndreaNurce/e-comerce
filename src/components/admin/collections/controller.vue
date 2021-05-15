<template>
  <section>
    <div class="controller-wrapper">
      <div
        class="container-wrapper"
        v-for="(data, index) in res.collectionData"
        :key="index"
      >
        <div v-if="!loading" class="container">
          <p>{{ data.name }}</p>
          <img :src="'data:image/jpg;base64,' + data.image" alt="" />
        </div>
        <div v-if="!loading" class="buttons">
          <p @click="dropCollection(data._id)"><i class="fas fa-minus"></i></p>
          <p @click="showCollectionEditor(data._id)">
            <i class="fas fa-pencil-alt"></i>
          </p>
        </div>
      </div>
      <skeleton
        v-if="loading"
        contentWidth="240px"
        :quantitys="number"
        contentHeight="240px"
      />
      <div @click="showNewItemContoller()" class="new-collection">
        <i class="fas fa-plus"></i>
      </div>
    </div>
    <div
      @click.self="displayEditor = false"
      v-if="displayEditor"
      class="editor"
    >
      <div class="editor-container">
        <newCollection v-if="editor == 'new'" />
        <editCollection v-if="editor == 'edit'" />
      </div>
    </div>
  </section>
</template>

<script>
import editCollection from "@/components/admin/collections/editCollection.vue";
import newCollection from "@/components/admin/collections/newCollection.vue";
import axios from "axios";
import skeleton from "@/components/skeleton.vue";

export default {
  components: {
    skeleton,
    editCollection,
    newCollection,
  },
  data() {
    return {
      res: this.$store.state,
      loading: true,
      number: 3,
      editor: null,
      displayEditor: false,
    };
  },
  methods: {
    async dropCollection(id) {
      await axios
        .delete("http://localhost:8081/collections/dropCollection", {
          params: {
            id,
          },
        })
        .then(
          function (res) {
            this.res.collectionData = res.data;
          }.bind(this)
        );
    },
    showNewItemContoller() {
      this.displayEditor = true;
      this.editor = "new";
    },
    showCollectionEditor(id) {
      this.displayEditor = true;
      this.editor = "edit";

      this.$store.state.currentCollectionEditing = this.res.collectionData.filter(
        (item) => {
          if (item._id == id) {
            return item;
          }
        }
      );
    },
    async getCollections() {
      await axios.get("http://localhost:8081/collections").then(
        function (res) {
          this.res.collectionData = res.data;
          this.loading = false;
        }.bind(this)
      );
    },
  },
  created() {
    this.getCollections();
  },
};
</script>

<style lang="scss" scoped>
section{


.controller-wrapper {
  position: relative;
  font-family: $font1;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  display: flex;

  .container-wrapper {
    .container {
      text-align: center;
      padding: 15px;
      margin: 0px 15px 8px 15px;
      background-color: rgb(248, 248, 248);
      p {
        padding-bottom: 8px;
      }

      img {
        width: 200px;
      }
    }
    .buttons {
      display: flex;
      justify-content: space-around;
      p:last-child {
        background-color: rgb(179, 208, 253);
      }
      p {
        background-color: rgb(255, 190, 190);
        padding: 8px 16px;
        border-radius: 20px;
        cursor: pointer;
      }
    }
  }
  .new-collection {
    .fas {
      padding: 8px;
      margin: 8px;
      border-radius: 60px;
      background-color: rgb(230, 230, 230);
      cursor: pointer;
    }
    .fa-plus {
      font-size: 16px;
    }
  }
  }
    .editor {
    position: fixed;
    height: 90%;
    width: 80%;
    top:80px;
    background-color: rgba(0, 0, 0, 0.548);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .editor-container {
      background-color: white;
      height: 80%;
      width: 80%;
    }
  }
}
</style>