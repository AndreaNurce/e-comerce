var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  name: String,
  description: String,
  inCollection: String,
  quantity: Number,
  price: Number,
  sizes: Array,
  color: Array,
  img: {
    data: Buffer,
    contentType: String,
  },
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("Product", productSchema);
