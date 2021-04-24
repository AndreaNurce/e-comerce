const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  jwt.verify(req.cookies.JWT, process.env.TOKEN_SECRET, function(err, decoded) {
    if (!err) {
      res.status(200).send({ isAdmin: decoded.is_admin });
      res.end();
    } else {
      res.status(400);
      res.end();
    }
  });
});

module.exports = router;
