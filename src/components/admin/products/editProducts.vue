<template>
  <div class="edit-product-wrapper">
    <div class="edit-product-section">
      <div class="image-editor">
        <img :src="'data:image/jpg;base64,' +state.image" alt="" /><br />
        <label for="files" class="btn">Select Image</label>
        <input
          required
          id="files"
          style="visibility: hidden"
          ref="file"
          type="file"
          name="image"
        />
      </div>
      <div class="form">
        <input v-model="name" placeholder="New name" type="text" />
        <input
          v-model="description"
          placeholder="New description"
          type="textBox"
        />

        <input type="number" v-model="price" placeholder="New Price" />
        <input type="number" v-model="quantity" placeholder="Change quantity" />

        <div>
          <select v-model="collection">
            <option
              v-for="(coll, index) in collectionNames"
              :value="coll"
              v-bind:key="index"
            >
              {{ coll }}
            </option>
          </select>
        </div>
        <div>
          <input type="checkbox" id="Red" value="Red" v-model="checkedColors" />
          <label for="Red"> Red </label>
          <input
            type="checkbox"
            id="Black"
            value="Black"
            v-model="checkedColors"
          />
          <label for="Black"> Black </label>
          <input
            type="checkbox"
            id="White"
            value="White"
            v-model="checkedColors"
          />
          <label for="White"> White </label>
        </div>
        <div>
          <input type="checkbox" id="S" value="S" v-model="checkedSizes" />
          <label for="S"> S </label>
          <input type="checkbox" id="M" value="M" v-model="checkedSizes" />
          <label for="M"> M </label>
          <input type="checkbox" id="L" value="L" v-model="checkedSizes" />
          <label for="L"> L </label>
        </div>
      </div>
    </div>
    <br />

    <button @click.prevent="updateProduct()">{{ message }}</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      description: "",
      checkedColors: Array,
      checkedSizes: Array,
      price: Number,
      quantity: Number,
      collection: String,
      collectionNames: Array,
      state: this.$store.state.currentProductEditing[0],
      image : null ,
      message: "Save Changes",
    };
  },
  methods: {
    async getCollections() {
      await axios.get("http://localhost:8081/collections/list").then(
        function (res) {
          this.collectionNames = res.data;
        }.bind(this)
      );
    },
    async updateProduct() {
      if(!this.$refs.file.files[0]){
        this.message = ""
      }
      this.message = "loading";
      let fd = new FormData();
      fd.append("name", this.name);
      fd.append("id", this.state.id);
      fd.append("description", this.description);
      fd.append("price", this.price);
      fd.append("quantity", this.quantity);
      fd.append("inCollection", this.collection);
      fd.append("image",this.$refs.file.files[0]);

      this.checkedColors.forEach((item) => {
        fd.append("colors", item);
      });
      this.checkedSizes.forEach((item) => {
        fd.append("sizes", item);
      });

      await axios
        .post("http://localhost:8081/products/product/update",fd )
        .then(
          function (res) {
            console.log(res)
            this.message = res.data.message;
            this.state.image = res.data.data[0].image
            setTimeout(function () {
              this.message = "Save Changes";
            }.bind(this), 3000);
          }.bind(this)
        );
    },
  },
  created() {
    this.name = this.state.name;
    this.description = this.state.description;
    this.checkedColors = this.state.colors;
    this.checkedSizes = this.state.sizes;
    this.price = this.state.price;
    this.quantity = this.state.quantity;
    this.collection = this.state.inCollection;
    this.getCollections();
  },
};
</script>

<style scoped lang="scss">
.edit-product-wrapper {
  button {
    margin: 5px 0;
    padding: 12px 16px;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: $iconHover;
    color: white;
    font-weight: 800;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .edit-product-section {
    @include flex(space-around);
    padding: 13px;
    .image-editor {
      width: 50%;

      display: flex;
      flex-direction: column;
      align-items: center;
      .btn {
        padding: 13px;
        font-size: 14px;
        margin: 15px;
        border: 1px dotted;
        margin: 10px;
      }
      img {
        width: 200px;
      }
    }
    .form {
      width: 50%;

      input[type="text"],
      input[type="textbox"],
      input[type="number"],
      select {
        padding: 6px 16px;
        font-size: 18px;
        width: 50%;
        margin: 5px 0;
        text-align: center;
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>