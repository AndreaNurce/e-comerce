<template>
  <div class="view-wrapper">
    <div
      v-if="state.collectionView == 'editCollection'"
      class="collection-editor"
    >
      <div class="collection-preview">
        <h2>
          Collectin Name :
          <span>{{ state.currentCollectionEditing[0].name }} </span>
        </h2>
        <h2>
          Collectin Tittle :
          <span> {{ state.currentCollectionEditing[0].tittle }} </span>
        </h2>
        <img
          :src="
            'data:image/jpg;base64,' + state.currentCollectionEditing[0].image
          "
          alt=""
        />
      </div>
      <div class="collection-form">
        <h1>Edit Collection</h1>
        <form @submit.prevent="saveCollection('collection/update')">
          <input
            required
            placeholder="Set a new name"
            v-model="name"
            type="text"
            name="name"
            autocomplete="off"
          />
          <br />
          <input
            required
            placeholder="Set a new description"
            v-model="tittle"
            type="text"
            name="tittle"
            autocomplete="off"
          />
          <br /><br />
          <label for="files" class="btn">Select a new Image</label>
          <input
            required
            id="files"
            style="visibility: hidden"
            ref="file"
            type="file"
            name="image"
          />
          <br /><br />
          <button align="center">Save changes</button>
          <loading v-if="loading" />
        </form>
      </div>
    </div>
    <div
      v-if="state.collectionView == 'newCollection'"
      class="new-collection-editor"
    >
      <h1>New Collection</h1>
      <div class="collection-form">
        <form @submit.prevent="saveCollection('collection')">
          <input
            required
            placeholder="Set a  name"
            v-model="name"
            type="text"
            name="name"
            autocomplete="off"
          />
          <br />
          <input
            required
            placeholder="Set a description"
            v-model="tittle"
            type="text"
            name="tittle"
            autocomplete="off"
          />
          <br /><br />
          <label for="files" class="btn">Select Image</label>
          <input
            required
            id="files"
            style="visibility: hidden"
            ref="file"
            type="file"
            name="image"
          />
          <br /><br />
          <button align="center">Save</button>
          <loading v-if="loading" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import loading from "@/components/loading.vue";
export default {
  components: {
    loading,
  },
  data() {
    return {
      state: this.$store.state,
      name: "",
      tittle: "",
      image: "",
      loading: false,
    };
  },
  methods: {
    async saveCollection(endPoint) {
      if (this.$refs.file.files[0]) {
        this.loading = true;
        let fd = new FormData();

        fd.append("name", this.name);
        fd.append("tittle", this.tittle);
        fd.append("image", this.$refs.file.files[0]);
        await axios
          .post(`http://localhost:8081/collections/${endPoint}`, fd, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(
            function (res) {
              this.$store.state.collectionData = res.data;
              // this.$store.commit("getData", res.data);

              this.loading = false;
            }.bind(this)
          );
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.view-wrapper {
  font-family: $font1;
  .new-collection-editor {
    padding: 30px;
    h2 {
      text-align: center;
    }
    .collection-form {
      font-family: $font1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      form {
        padding: 20px;
        width: 340px;
        text-align: center;
        input[type="text"] {
          padding: 6px 16px;
          width: 250px;
          font-size: 18px;
          margin: 15px;
          border-top: none;
          border-left: none;
          border-right: none;
          background-color: none;
          text-align: center;
          &:focus {
            outline: none;
          }
        }
        label {
          padding: 13px;
          font-size: 14px;
          margin: 15px;
          border: 1px dotted;
        }
        button {
          padding: 12px 16px;
          text-align: center;
          border: none;
          cursor: pointer;
          background-color: $iconHover;
          color: white;
          font-weight: 800;
        }
      }
    }
  }
  .collection-editor {
    padding: 30px;
    display: flex;
    justify-content: space-evenly;

    .collection-preview {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      h2{
        span {
          font-size: 80%;
          font-family: "italic" ;
        }
      }
      img {
        width: 200px;
      }
    }
    .collection-form {
      font-family: $font1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        text-align: center;
      }
      form {
        padding: 20px;
        width: 340px;
        text-align: center;
        input[type="text"] {
          padding: 6px 16px;
          width: 250px;
          font-size: 18px;
          margin: 15px;
          border-top: none;
          border-left: none;
          border-right: none;
          background-color: none;
          text-align: center;
          &:focus {
            outline: none;
          }
        }
        label {
          padding: 13px;
          font-size: 14px;
          margin: 15px;
          border: 1px dotted;
        }
        button {
          padding: 12px 16px;
          text-align: center;
          border: none;
          cursor: pointer;
          background-color: $iconHover;
          color: white;
          font-weight: 800;
        }
      }
    }
  }
}
</style>