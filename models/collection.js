var mongoose = require("mongoose");

var collectionSchema = new mongoose.Schema({
    name: String,
    tittle: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("Collection", collectionSchema);
