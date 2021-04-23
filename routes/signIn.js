const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

router.get("/", async (req, res) => {
  let admin = await Admin.findOne({
    password: req.query.password,
    email: req.query.email,
  });

  if (admin !== null) {
    jwt.sign(
      {
        email: "andrea-dibra@hotmail.com",
        is_admin: true,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" },
      function(err, token) {
        if (!err) {
          res.cookie("JWT", token, {
            maxAge: 86_400_000,
            httpOnly: true,
          });
          res.sendStatus(200);
          res.end();
        }
      }
    );
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
