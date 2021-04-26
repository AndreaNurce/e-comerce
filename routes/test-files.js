const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
//image takes place in req.files
//text is set on body
res.end();
});

module.exports = router;
