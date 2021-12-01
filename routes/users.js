
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
    res.render("users/Login");      
});

router.get('/signup',async (req, res) => {
    if (req.session.user) {
        return res.redirect('/private');
      } else {
        res.render("users/signup",{title: "SIGNUP"});
      }     
  });
  router.post('/signup',async (req, res) => {

    if (!req.body.profilePicture )  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide Profile picture'});
        return;
      }

    if (!req.body.firstName )  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide First Name'});
        return;
      }
    if (!req.body.lastName )  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide profile Last Name'});
        return;
      }
    if (!req.body.username )  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide profile Username'});
        return;
      }  
    if (!req.body.emailAddress )  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide profile Email Address'});
        return;
      } 
    if (!req.body.password )  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide profile Password'});
        return;
      } 
    if (!req.body.phoneNumber )  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide profile Phone Number'});
        return;
      } 
    if (!req.body.country )  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide profile Country'});
        return;
    }
    if (!req.body.biography )  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide profile Biography'});
        return;
    }
    if (!req.body.gender)  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide Gender'});
        return;
    }
    if (!req.body.userType)  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide UserType'});
        return;
    }
    if (!req.body.dateOfBirth)  {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'You must provide Date of Birth'});
        return;
    }
    if(typeof firstName !== "string") {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'firstName must be string'});
        return; 
    }
    if(typeof lastName !== "string" ) {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'lastName must be string'});
        return; 
    }
    if(typeof emailAddress !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'emailAddress must be string'});
        return; 
    }
    if(typeof password !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'password must be string'});
        return;   
    }
    if(typeof country !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'country must be string'});
        return; 
    }
    if(typeof biography !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'biography must be string'});
        return;
    }
    if(typeof gender !== "string") throw 'gender must be string'{
        
    }
    if(typeof userType !== "string") throw 'userType must be string'
    if(typeof phoneNumber !== "string") throw 'phoneNumber must be string'
    if(typeof dateOfBirth !== "string") throw 'dateOfBirth must be string'
    if(typeof username !== "string") throw `userName must be string`

    try{
        const { profilePicture, firstName, lastName, username, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth} = blogPostData;
        const postSignup = await usersData.createUser(profilePicture, firstName, lastName, username, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth);
            if(postSignup){
                return res.redirect('/');
            }
        }
    catch(e){
        res.status(400).render("users/signup");
        //res.status().render('users/signup',{title:"SignUp",error: e.message||`Internal Server Error`})
    }
  })

  router.get('/private',async (req, res) => {
    
    if (req.session.user) {
        return res.render("users/private",{title:"Private", username: req.session.user})
      }
    });


  router.get('/logout',async (req, res) => {
    req.session.destroy();
    return res.render("users/logout",{title:"Logout"})
    

});


module.exports = router;
