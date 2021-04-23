const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");

router.get("/", async (req, res) => {
  // let admin = await Admin.findOne({
  //   password: req.query.password,
  //   email: req.query.email,
  // });

  if(1){
    res.cookie('JWT', '1234', {
      maxAge: 86_400_000,
      httpOnly: true,
      });
      console.log('Run')
  }else{
    console.log('fail')

  }
  
  res.send('200');
});

module.exports = router;
