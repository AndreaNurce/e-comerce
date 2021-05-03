const express = require("express");
const router = express.Router();
const Collection = require("../models/collection");
const authenticateToken = require("../middleWares/jwt");

router.post("/collection", authenticateToken, async (req, res) => {
  let { body } = req;
  let { files } = req;
  let object =  await new Collection({
    name: body.name,
    tittle: body.tittle,
    img: { data: files.image.data },
  });
  object.save();
  res.end();
});

router.get('/',async (req,res)=>{
let obj = await Collection.find();

let array = [];
obj.forEach(function (item){
let object = {
  _id : item._id,
  image :  item.img.data.toString("base64"),
  tittle : item.tittle,
  name : item.name
}

array.push(object)
});
res.send(array);
})

module.exports = router;
