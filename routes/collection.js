const express = require("express");
const router = express.Router();
const Collection = require("../models/collection");
const authenticateToken = require("../middleWares/jwt");

router.post("/collection", authenticateToken, async (req, res) => {
  let { body } = req;
  let { files } = req;
  let object = new Collection({
    name: body.name,
    tittle: body.tittle,
    img: { data: files.image.data },
  });
  object.save();
  res.end();
});

module.exports = router;
