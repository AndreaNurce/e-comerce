const express = require("express");
const router = express.Router();
const Collection = require("../models/collection");
const authenticateToken = require("../middleWares/jwt");

function getCollection(obj) {
  let array = [];
  obj.forEach(function(item) {
    let object = {
      _id: item._id,
      image: item.img.data.toString("base64"),
      tittle: item.tittle,
      name: item.name,
    };

    array.push(object);
  });
  return array;
}

router.post("/collection", authenticateToken, async (req, res) => {
  let { body } = req;
  let { files } = req;
  let object = await new Collection({
    name: body.name,
    tittle: body.tittle,
    img: { data: files.image.data },
  });
  await object.save();

  let obj = await Collection.find();
  res.send(getCollection(obj));
});

router.delete("/dropCollection", authenticateToken, async (req, res) => {
  await Collection.deleteOne({ _id: req.query.id });
  let obj = await Collection.find();
  res.send(getCollection(obj));
});

router.post("/collection/update", authenticateToken, async (req, res) => {
  if (req.body.name) {
    await Collection.updateOne(
      { _id: req.body.id },
      { $set: { name: req.body.name } }
    ).catch(() => res.status(500).send("An error occurred"));

    let obj = await Collection.find();
    res.send(getCollection(obj));
  }
  if (req.body.tittle) {
    await Collection.updateOne(
      { _id: req.body.id },
      { $set: { tittle: req.body.tittle } }
    ).catch(() => res.status(500).send("An error occurred"));

    let obj = await Collection.find();
    res.send(getCollection(obj));
  }
  if (req.files) {
    await Collection.updateOne(
      { _id: req.body.id },
      { $set: { img: { data: req.files.image.data } } }
    ).catch(() => res.status(500).send("An error occurred"));

    let obj = await Collection.find();
    res.send(getCollection(obj));
  }
});

router.get("/", async (req, res) => {
  let obj = await Collection.find();
  res.send(getCollection(obj));
});

router.get("/list", async (req, res) => {
  let obj = await Collection.find();
  let array = [];

  function getNames(obj) {
    obj.forEach(function(item) {
      array.push(item.name);
    });
    return array;
  }
  res.send(getNames(obj));
});

module.exports = router;
