const express = require("express");
const router = express.Router();
const Products = require("../models/product");
const authenticateToken = require("../middleWares/jwt");

function getProducts(obj) {
  let array = [];
  obj.forEach(function(item) {
    let object = {
      id: item._id,
      image: item.img.data.toString("base64"),
      description: item.description,
      colors: item.color,
      sizes: item.sizes,
      price: item.price,
      quantity: item.quantity,
      inCollection: item.inCollection,
      name: item.name,
    };
    array.push(object);
  });
  return array;
}

router.post("/", authenticateToken, async (req, res) => {
  let { body } = req;
  let { files } = req;
  let object = await new Products({
    name: body.name,
    description: body.description,
    color: body.colors,
    sizes: body.sizes,
    price: body.price,
    quantity: body.quantity,
    inCollection: body.inCollection,
    img: { data: files.image.data },
  });
  await object.save();
  let obj = await Products.find();
  res.send(getProducts(obj));
});

router.post("/product/update", authenticateToken, async (req, res) => {
  let { body } = req;
  let { files } = req;
  let bodyObj = {
    name: body.name,
    description: body.description,
    color: body.colors,
    sizes: body.sizes,
    price: body.price,
    quantity: body.quantity,
    inCollection: body.inCollection,
  };
  if (files != null) {
    bodyObj.img = { data: files.image.data };
  }
  let message;
  await Products.findOneAndUpdate({ _id: body.id }, bodyObj)
    .then((message = "Updated Succesfully"))
    .catch((err) => res.end(err));
  let obj = await Products.find();
  let data = getProducts(obj);
  res.send({ data, message });
});

router.delete("/dropProduct", authenticateToken, async (req, res) => {
  await Products.deleteOne({ _id: req.query.id });
  let obj = await Products.find();
  res.send(getProducts(obj));
});

router.get("/", async (req, res) => {
  let obj = await Products.find();
  res.send(getProducts(obj));
});

router.get("/product/:name", async (req, res) => {
  let obj = await Products.find({ inCollection: req.params.name });
  let data = getProducts(obj);
  res.send(data);
});

module.exports = router;
