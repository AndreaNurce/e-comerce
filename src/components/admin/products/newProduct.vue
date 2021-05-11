<template>
  <div class="view-wrapper">
    <div class="new-product-editor">
      <h1>New product</h1>
      <div class="product-form">
        <form @submit.prevent="saveProduct()">
          <div>
            <input
              required
              placeholder="Set a  name"
              v-model="name"
              type="text"
              name="name"
              autocomplete="off"
            />
            <input
              required
              placeholder="Set a description"
              v-model="description"
              type="textbox"
              name="description"
              autocomplete="off"
            />
          </div>
          <br />
          <div>
            <input
              v-model="price"
              required
              placeholder="Set a price"
              type="text"
              autocomplete="off"
              @keypress="isNumber($event)"
            />
            <input
              v-model="quantity"
              required
              placeholder="Set quantity"
              type="text"
              autocomplete="off"
              @keypress="isNumber($event)"
            />
          </div>

          <br />

          <div>
            <span class="colors">Colors : </span>
            <input
              type="checkbox"
              id="Red"
              value="Red"
              v-model="checkedColors"
            />
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
          <label for="files" class="btn">Select Image</label>
          <button align="center">Save</button>
          <loading v-if="loading" />
          <input
            required
            id="files"
            style="visibility: hidden"
            ref="file"
            type="file"
            name="image"
          />
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
      description: "",
      price: Number,
      loading: false,
      quantity: Number,
      checkedColors: [],
      checkedSizes: [],
      collectionNames: [],
      collection: "",
    };
  },
  methods: {
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
        return false;
      } else {
        return true;
      }
    },
    async saveProduct() {
      if (this.$refs.file.files[0]) {
        this.loading = true;
        let fd = new FormData();

        fd.append("name", this.name);
        fd.append("description", this.description);
        fd.append("colors", this.checkedColors);
        fd.append("price", this.price);
        fd.append("quantity", this.quantity);
        fd.append("sizes", this.checkedSizes);
        fd.append("inCollection", this.collection);
        fd.append("image", this.$refs.file.files[0]);
        await axios
          .post(`http://localhost:8081/products`, fd, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(
            function (res) {
              this.$store.state.productData = res.data;
              // this.$store.commit("getData", res.data);

              this.loading = false;
            }.bind(this)
          )
          .catch(
            function () {
              this.loading = false;
            }.bind(this)
          );
      }
    },
    async getCollections() {
      await axios.get("http://localhost:8081/collections/list").then(
        function (res) {
          this.collectionNames = res.data;
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
.view-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .new-product-editor {
    h1 {
      text-align: center;
      margin-bottom: 40px;
      font-size: 30px;
    }
    form {
      display: flex;
      align-items: center;
      flex-direction: column;
      div {
        input[type="text"],
        input[type="textbox"] {
          margin: 0 10px;
          padding: 10px;
          text-align: center;
        }
        span {
          margin-right: 50px;
          font-size: 20px;
          font-weight: bold;
        }
        .Sizes {
          margin-left: -55px;
        }
        .Collection {
          margin-left: -98px;
        }
      }
      .btn {
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
</style>