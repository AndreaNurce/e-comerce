const express = require("express");
const router = express.Router();
const Collection = require("../models/collection");
const authenticateToken = require("../middleWares/jwt");
function getCollection(obj){
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
  await Collection.deleteOne({_id : req.query.id});
  let obj = await Collection.find();
  res.send(getCollection(obj));
});

router.get("/", async (req, res) => {
  let obj = await Collection.find();
  res.send(getCollection(obj));
});

module.exports = router;
