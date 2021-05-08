const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const authenticateToken = require("../middleWares/jwt");

router.post("/", authenticateToken, async (req, res) => {
  let { body } = req;
  let { files } = req;
  let object = await new Product({
    name: body.name,
    tittle: body.tittle,
    description: body.description,
    color: body.colors,
    sizes: body.sizes,
    price: body.price,
    quantity: body.quantity,
    collection: body.collection,
    img: { data: files.image.data },
  });
  await object.save();
  res.send();
});
module.exports = router;
