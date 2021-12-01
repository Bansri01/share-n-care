const express = require('express');
const data = require('../data');
const usersData = data.users;
const multer = require("multer");
const mongoCollections = require('../config/mongoCollections')
const userColl = mongoCollections.users;
const ObjectID  = require('mongodb').ObjectId;
const router = express.Router();

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

// router.get('/profile', async (req, res) => {
//     // const userdata = await getbyUsername(req.session.user)
//     const userdata = await usersData.getByUsername("user01")
//     res.render("users/userProfile", {firstname: userdata.firstName, lastname: userdata.lastName, biography: userdata.biography, gender: userdata.gender, phoneNumber: userdata.phoneNumber, emailAddress: userdata.emailAddress, location: userdata.country})
// })

router.get('/',async (req, res) => {
    res.render('users/Login');
  });
  
//   router.post('/signup',async (req, res) => {
//     const postSignup = await usersData.createUser(req.body.username,req.body.password);
//     if(postSignup.userInserted){
//         return res.redirect('/');
//     }
//   });

router.get('/signup',async (req, res) => {
        res.render("users/signup");      
  });
  router.post('/signup',async (req, res) => {
    try{
        const { profilePicture, firstName, lastName, username, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth} = blogPostData;
        const postSignup = await userData.createUser(profilePicture, firstName, lastName, username, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth);
            if(postSignup.userInserted){
                return res.redirect('/');
            }
        }
    catch(e){
        res.status(500).json({ error: e });
        //res.status().render('users/signup',{title:"SignUp",error: e.message||`Internal Server Error`})
    }
  })


module.exports = router;
