const express = require("express");
const router = express.Router();
const landingPageUploads = require("../models/landingPage");

router.post("/update", async (req, res) => {
  if (req.body.tittle) {
    await landingPageUploads
      .findOneAndUpdate({ tittle: req.body.tittle })
      .catch((err) => res.status(500).send("An error occurred", err));
  }
  if (req.body.subTittle) {
    await landingPageUploads
      .findOneAndUpdate({ subTittle: req.body.subTittle })
      .catch((err) => res.status(500).send("An error occurred", err));
  }
  if (req.files) {
    await landingPageUploads
      .findOneAndUpdate({ img: { data: req.files.image.data } })
      .catch((err) => res.status(500).send("An error occurred", err));
  }
  res.status(200).end();
});

router.get("/", (req, res) => {
  landingPageUploads.findOne({}, (err, item) => {
    if (err) {
      res.status(500).send("An error occurred", err);
    } else {
      // console.log(items[0].img.data.toString('base64'));
      let image = item.img.data.toString("base64");
      let tittle = item.tittle;
      let subTittle = item.subTittle;
      res.send({ image, tittle, subTittle });
    }
  });
});

module.exports = router;
