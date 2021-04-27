var mongoose = require("mongoose");

var landingPageImageSchema = new mongoose.Schema({
    tittle: String,
    subTittle: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("landingPage", landingPageImageSchema);
