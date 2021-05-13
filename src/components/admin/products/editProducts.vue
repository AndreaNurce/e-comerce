<template>
  <div class="edit-product-wrapper">
    <div class="edit-product-section">
      <div class="image-editor">
        <img :src="'data:image/jpg;base64,' + state.image" alt="" /><br />
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
        <div>
          <span class="colors">Colors : </span>
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
          <span class="Sizes">Sizes : </span>
          <input type="checkbox" id="S" value="S" v-model="checkedSizes" />
          <label for="S"> S </label>
          <input type="checkbox" id="M" value="M" v-model="checkedSizes" />
          <label for="M"> M </label>
          <input type="checkbox" id="L" value="L" v-model="checkedSizes" />
          <label for="L"> L </label>
        </div>
        <input type="number" v-model="price" placeholder="New Price" />
        <input type="number" v-model="quantity" placeholder="Change quantity" />

        <div>
          <span class="Collection">Collection : </span>
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
      </div>
    </div>
      <button>Save Changes</button>
      <loading v-if="loading" />
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
.edit-product-wrapper{
      button {
      padding: 12px 16px;
      text-align: center;
      border: none;
      cursor: pointer;
      background-color: $iconHover;
      color: white;
      font-weight: 800;
      margin-left :50%;
      transform : translateX(-50%)
    }
.edit-product-section {
  @include flex(space-evenly);
  .image-editor {
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
}
}
</style>