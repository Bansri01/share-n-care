
const express = require('express');
const data = require('../data');
const router = express.Router();
const multer = require("multer");
const mongoCollections = require('../config/mongoCollections')
const userData = data.users;
const userColl = mongoCollections.users;
const ObjectID  = require('mongodb').ObjectId;

router.get('/',async (req, res) => {
    res.render('Users/Login');
  });
  
//   router.post('/signup',async (req, res) => {
//     const postSignup = await usersData.createUser(req.body.username,req.body.password);
//     if(postSignup.userInserted){
//         return res.redirect('/');
//     }
//   });

router.get('/signup',async (req, res) => {
        res.render("Users/signup");      
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
