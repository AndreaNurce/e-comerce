const express = require("express");
const router = express.Router();
const landingPageUploads = require("../models/landingPage");

 


router.post('/',(req, res) => {
    console.log(req.body)
    var obj = {
        tittle: req.body.tittle,
        subTittle: req.body.subTittle,
        img: {
            data: req.files.image.data,
            contentType: 'image/png'
        }
    }
    landingPageUploads.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
        }
    });

    res.end();
})

router.get('/', (req, res) => {
    landingPageUploads.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            // console.log(items[0].img.data.toString('base64'));
            let ite = "data:image/jpg;base64," + items[0].img.data.toString('base64');
            res.end(ite);
        }
    });
});

// router.post("/",  (req, res) => {
// //image takes place in req.files
// //text is set on body
// let data =  JSON.stringify(req.files);

// res.send(data);
// });

module.exports = router;
