const express = require("express");
const router = express.Router();
const landingPageUploads = require("../models/landingPage");
const authenticateToken = require("../middleWares/jwt");


function getPage(obj) {
  let array = [];

    let object = {
      image: obj.img.data.toString("base64"),
      tittle: obj.tittle,
      subTittle: obj.subTittle,
    };
    array.push(object);
  return array;
}

router.post("/update", authenticateToken, async (req, res) => {

  let { body } = req;
  let { files } = req;
  let bodyObj ={
    tittle: body.tittle,
    subTittle: body.subTittle,
  };
  if(files != null){
    bodyObj.img = { data: files.image.data };
  }
   await landingPageUploads.findOneAndUpdate(bodyObj).catch((err) => res.end(err))
   
   await landingPageUploads.findOne({}, (err, item) => {
    if (err) {
      res.status(500).send("An error occurred");
    } else {
      res.send(getPage(item));
    }
  });

});

router.get("/", async (req, res) => {
  await landingPageUploads.findOne({}, (err, item) => {
    if (err) {
      res.status(500).send("An error occurred");
    } else {
      res.send(getPage(item));
    }
  });
});

module.exports = router;
