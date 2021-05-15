<template>
  <div class="view-wrapper">
        <h1>Edit Collection</h1>

    <div class="collection-editor">
      <div class="collection-preview">
        <img
          :src="
            'data:image/jpg;base64,' + state.currentCollectionEditing[0].image
          "
          alt=""
        />
        <br /><br />
        <label for="files" class="btn">Select a new Image</label>
        <input id="files" style="visibility: hidden" ref="file" type="file" />
      </div>
      <div class="collection-form">
        <form >
          <input
            placeholder="Set a new name"
            v-model="name"
            type="text"
            name="name"
            autocomplete="off"
          />
          <br />
          <input
            placeholder="Set a new description"
            v-model="tittle"
            type="text"
            name="tittle"
            autocomplete="off"
          />
          <br /><br />
        </form>
      </div>
    </div>
    <button @click.prevent="saveCollection()" align="center">{{message}}</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      state: this.$store.state,
      name: "",
      tittle: "",
      loading: false,
      message : 'Save',

    };
  },
  methods: {
    async saveCollection() {
        this.message = "Loading...";
        let fd = new FormData();

        fd.append("name", this.name);
        fd.append("id", this.state.currentCollectionEditing[0]._id);
        fd.append("tittle", this.tittle);
        fd.append("image", this.$refs.file.files[0]);
        await axios
          .post(`http://localhost:8081/collections/collection/update`, fd, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(
            function (res) {
              this.message = "Updated Succesfully";

              this.$store.state.collectionData = res.data;
              // this.$store.commit("getData", res.data);

              this.$store.state.currentCollectionEditing = res.data.filter(
                (item) => {
                  if (item._id == this.state.currentCollectionEditing[0]._id) {
                    return item;
                  }
                }
              );
              setTimeout(
                function () {
                  this.message = "Save Changes";
                }.bind(this),
                3000
              );
            }.bind(this)
          )
          .catch(
            function () {
              this.message = "Error";
              setTimeout(
                function () {
                  this.message = "Save Changes";
                }.bind(this),
                3000
              );
            }.bind(this)
          );
      }
  },
  created() {
    this.name = this.state.currentCollectionEditing[0].name;
    this.tittle = this.state.currentCollectionEditing[0].tittle;
  },
};
</script>


<style lang="scss" scoped>
.view-wrapper {
  .collection-editor {
    display: flex;
    justify-content: space-evenly;
    .collection-preview {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > * {
        margin: 20px;
      }

      img {
        width: 200px;
      }
      label {
        padding: 13px;
        font-size: 14px;
        margin: 15px;
        border: 1px dotted;
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
      }
    }
  }
  button {
    padding: 12px 16px;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: $iconHover;
    color: white;
    font-weight: 800;
    margin-left : 50%;
    transform : translateX(-50%);
  }
  h1{
    text-align:center;
    padding : 20px;
  }
}
</style>