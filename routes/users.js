
const express = require('express');
const router = express.Router();
const data = require('../data');
const usersData = data.users;

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
