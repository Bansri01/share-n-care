
const express = require('express');
const router = express.Router();
const data = require('../data');
const usersData = data.users;
const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoCollections = require('../config/mongoCollections')
const data = require('../data');
const userData = data.users;
const userColl = mongoCollections.users;
const ObjectID  = require('mongodb').ObjectId;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/users")
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage })

router.post('/profile', upload.single('profile'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      res.send(400);
    }
  });

  module.exports= router;
router.get('/',async (req, res) => {
    res.render('Users/Login');
  });
  
//   router.post('/signup',async (req, res) => {
//     const postSignup = await usersData.createUser(req.body.username,req.body.password);
//     if(postSignup.userInserted){
//         return res.redirect('/');
//     }
//   });



module.exports = router;
