const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("call recived");
  res.send("hello There from /test");
});

module.exports = router;
