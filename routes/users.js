
const express = require('express');
const data = require('../data');
const usersData = data.users;
const multer = require("multer");
const mongoCollections = require('../config/mongoCollections')
const userColl = mongoCollections.users;
const ObjectID  = require('mongodb').ObjectId;
const router = express.Router();

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "public/images/users")
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
// })

// var upload = multer({ storage: storage })

// router.post('/profile', upload.single('profile'), (req, res) => {
//     try {
//       res.send(req.file);
//     }catch(err) {
//       res.send(400);
//     }
//   });

// router.get('/profile', async (req, res) => {
//     // const userdata = await getbyUsername(req.session.user)
//     const userdata = await usersData.getByUsername("user01")
//     res.render("users/userProfile", {firstname: userdata.firstName, lastname: userdata.lastName, biography: userdata.biography, gender: userdata.gender, phoneNumber: userdata.phoneNumber, emailAddress: userdata.emailAddress, location: userdata.country})
// })

router.get('/',async (req, res) => {
    if (req.session.user) {
        return res.redirect('/private');
      } else {
        res.render('homepage/Landingpage',{title: "Share and Care"});
       // res.render("users/login",{title: "LOGIN"});
      }
    
  });
//   router.get('/',async (req, res) => {
//     res.render('Users/Login');
//   });
  
//   router.post('/signup',async (req, res) => {
//     const postSignup = await usersData.createUser(req.body.username,req.body.password);
//     if(postSignup.userInserted){
//         return res.redirect('/');
//     }
//   });

router.get('/Login',async (req, res) => {
    res.render("Users/Login");      
});

router.get('/signup',async (req, res) => {
    if (req.session.user) {
        return res.redirect('/private');
      } else {
        res.render("Users/signup",{title: "SIGNUP"});
      }     
  });



  router.post('/signup',async (req, res) => {
     
    const user_data = req.body;
    console.log(user_data)

    try{
        const { profilePicture, firstName, lastName, username, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth} = user_data;
        const postSignup = await usersData.createUser(profilePicture, firstName, lastName, username, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth);
            if(postSignup){
                return res.redirect('/');
            }
        }
    catch(e){
        res.status(400).render("Users/signup");
        //res.status().render('users/signup',{title:"SignUp",error: e.message||`Internal Server Error`})
    }
  })

  router.get('/private',async (req, res) => {
    
    if (req.session.user) {
        return res.render("Users/private",{title:"Private", username: req.session.user})
      }
    });


  router.get('/logout',async (req, res) => {
    req.session.destroy();
    return res.render("Users/logout",{title:"Logout"})
    

});


module.exports = router;
