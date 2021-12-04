const express = require('express');
const data = require('../data');
const usersData = data.users;
const multer = require("multer");
const mongoCollections = require('../config/mongoCollections')
const userColl = mongoCollections.users;
const ObjectID  = require('mongodb').ObjectId;
const router = express.Router();
const countries = require("countries-list");


//-------------for Storing Images------------------//
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/users")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname.replace(" ", "_") + '-' + Date.now())
    }
})


const upload = multer({ storage: storage })
//-----------End of storing images-----------------------



//-------------Post Profile-----------------------------
router.post('/profile', upload.single('profile'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      res.send(400);
    }
  });
//-------------End Post Profile----------------------//


//------------Get Profile-------------------------//
router.get('/profile', async (req, res) => {
    // const userdata = await getbyUsername(req.session.user)
    const userdata = await usersData.getByUsername("user07")
    res.render("users/userProfile", {profilePicture: userdata.profilePicture, firstname: userdata.firstName, lastname: userdata.lastName, biography: userdata.biography, gender: userdata.gender, phoneNumber: userdata.phoneNumber, emailAddress: userdata.emailAddress, location: userdata.country})
})
//--------------End of get Profile----------------//


// router.get('/',async (req, res) => {
//     res.render('users/Login');
//   });
  
//----------------function to validate Email---------------------------//
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//---------------End of function to validate Email----------------------//




//--------------function to Validate Date----------------//
function validateDate(date) {
        let datePattern = /^\d{4}-\d{2}-\d{2}$/ 
            if(!date.match(datePattern)) throw `dateOfReview should be in format yyyy-mm-dd`
            const today = new Date()
            let date_arr = date.split("-")
            parsedMonth = Number(date_arr[1])
            parsedDay = Number(date_arr[2])
            parsedYear = Number(date_arr[0])
            if(parsedMonth < 1 || parsedMonth > 12){
                throw `Invalid month`
            }
            if(parsedDay < 1 || parsedDay > 31){
                throw 'Invalid Day value'
            }
            monthArr1 = [1, 3, 5, 7, 8, 10, 12]
            monthArr2 = [4, 6, 9, 11]
            if(monthArr1.includes(parsedMonth) && parsedDay > 31){
                throw `The month does not have more than 31 days`
            }
            else if(monthArr2.includes(parsedMonth) && parsedDay > 30){
                throw `The month does not have more than 30 days`
            }
            else if(parsedMonth === 2 && parsedDay > 28 ){
                throw `The month february does not have more than 28 days`
            }
            
            let d1 = new Date(Date.parse(date));
            let d2 = new Date(Date.parse(today));
            var diff = d2.getTime() - d1.getTime();
    
            if (diff < 0) {
                return false; 
            } else {
                return true;
            }
        
    }

//--------------End of Function to Validate Date----------------//




//------------get Landing Page--------------------//
router.get('/',async (req, res) => {
    if (req.session.user) {
        res.render('homepage/Landingpage',{title: "Share and Care",name:req.session.user});
        console.log("I am in")
      } else {
        res.render('homepage/Landingpage',{title: "Share and Care"});
       
      }
    
  });
//-----------End of get landing Page---------------//



//-------------get SignUp Page-------------------//
router. get('/signup',async (req, res) => {
    if (req.session.user) {
        return res.redirect('/');
      } else {
        res.render("users/signup",{title: "SIGNUP"});
      }     
  });
//------------end of Get SignUp page--------------//


//-------------Post Sign Up--------------------//
  router.post('/signup', upload.single('profilePicture'), async (req, res) => {
    if (!req.file)  {
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
    if(typeof req.body.firstName !== "string") {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Firstname must be string'});
        return; 
    }
    if(typeof req.body.lastName !== "string" ) {
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Lastname must be string'});
        return; 
    }
    if(typeof req.body.emailAddress !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'EmailAddress must be string'});
        return; 
    }
    if(typeof req.body.password !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Password must be string'});
        return;   
    }
    if(typeof req.body.country !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Country must be string'});
        return; 
    }
    if(typeof req.body.biography !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Biography must be string'});
        return;
    }
    if(typeof req.body.gender !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Gender must be string'});
        return; 
    }
    if(typeof req.body.userType !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'UserType must be string'});
        return; 
    }
    if(typeof req.body.phoneNumber !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'PhoneNumber must be string'});
        return; 
    }
    if(typeof req.body.dateOfBirth !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'DateOfBirth must be string'});
        return; 
    }
    if(typeof req.body.username !== "string"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'UserName must be string'});
        return; 
    }

    if (/^ *$/.test(req.body.firstName)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Firstname cannot be empty'});
        return; 
    }
    if (/^ *$/.test(req.body.lastName)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Lastname cannot be empty'});
        return; 
    }
    if (/^ *$/.test(req.body.emailAddress)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'EmailAddress cannot be empty'});
        return;
    }
    if (/^ *$/.test(req.body.password)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Password cannot be empty'});
        return; 
    }
    if (/^ *$/.test(req.body.country)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Country cannot be empty'});
        return;
    }
    if (/^ *$/.test(req.body.biography)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Biography cannot be empty'});
        return;
    }
    if (/^ *$/.test(req.body.gender)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Gender cannot be empty'});
        return;
    }
    if (/^ *$/.test(req.body.userType)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'UserType cannot be empty'});
        return;
    }
    if (/^ *$/.test(req.body.phoneNumber)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'PhoneNumber cannot be empty'});
        return;
    }
    if (/^ *$/.test(req.body.dateOfBirth)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'DateOfBirth cannot be empty'});
        return;
    }
    if (/^ *$/.test(req.body.username)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Username cannot be empty'});
        return;
    }


    if(/[^A-Za-z0-9]/g.test(req.body.username)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Username should only have numbers and alphabets'});
        return;
    }

    if(req.body.username.length < 4){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Username should have atleast 4 characters'});
        return;
    }
    
    if(!validateEmail(req.body.emailAddress)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Please Enter valid Email Address'});
        return;
    }

    if(/\s/g.test(req.body.password)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'password cannot have spaces'});
        return;  
    }
    if(req.body.password.length < 8){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Password should be atleast 8 characters long'});
        return; 
    }
    let phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
    if(!req.body.phoneNumber.match(phoneRe)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Phone number must be of correct format and all numbers'});
        return
    }
    const countryCodes = Object.keys(countries.countries);
    const countryNames = countryCodes.map(code => countries.countries[code].name);
    if (!countryNames.includes(req.body.country)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Please enter a valid country'});
        return
    }
    let gen = ["Female", "Male", "other"]
    if(!gen.includes(req.body.gender)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Please enter valid gender'});
        return
    }


    if (req.body.userType.trim() != "Patient" && req.body.userType.trim() != "Doctor"){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Usertype must be a patient or a doctor'});
        return  
    }
    
     try{ 
    if (!validateDate(req.body.dateOfBirth)){
        res.status(400).render('users/signup',{ title:"SignUp",error: 'Please Enter valid date of birth'});
        return
    }
    }
    catch(e){
        res.status(400).render('users/signup',{ title:"SignUp",error: e});
        return

    }

   

    try{
        const user_data = req.body;
        user_data.profilePicture = req.file.filename;
        const { profilePicture, firstName, lastName, username, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth} = user_data;
        const postSignup = await usersData.createUser(profilePicture, firstName, lastName, username, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth);
       
        if(postSignup){
            req.session.user= username
                return res.redirect('/');
            }

            
        }
    catch(e){
        res.status(e.error || 500).render('users/signup',{title:"SignUp",error: e.message ||`Internal Server Error`})
    }
  })

//------------End of Post Signup------------------------//



//--------------Get Login---------------------//

  router.get('/login',async (req, res) => {
    if (req.session.user) {
        return res.redirect('/');
      } else {
        res.render("users/login",{title: "LOGIN"});
      }
  });  
  
  //--------------End of Get Login----------------------//
  
  
  //--------------Post Login---------------------------//
  router.post('/login',async (req, res) => {
    if (!req.body.username )  {
        res.status(400).render('users/Login',{ title:"login",error: 'You must provide Username'});
        return;
      }
    if (!req.body.password )  {
        res.status(400).render('users/Login',{ title:"login",error: 'You must provide Password'});
        return;
    } 
    if(typeof req.body.username !== 'string'){
        res.status(400).render('users/Login',{ title:"login",error: 'Please enter a valid string'});
        return;
    }
      
    if(/^ *$/.test(req.body.username)){
        res.status(400).render('users/Login',{ title:"login",error: 'Username cannot be empty'});
        return;
    }
    if(/[^A-Za-z0-9]/g.test(req.body.username)){
        res.status(400).render('users/Login',{ title:"login",error: 'Username should only have numbers and alphabets'});
        return;
    }
    if(req.body.username.length < 4){
        res.status(400).render('users/Login',{ title:"login",error: 'Username should have atleast 4 characters'});
        return;
    }

    if(/^ *$/.test(req.body.password)){
        res.status(400).render('users/Login',{ title:"login",error: 'password cannot be empty'});
        return;
    }

    if(/\s/g.test(req.body.password)){
        res.status(400).render('users/Login',{ title:"login",error: 'password cannot have spaces'});
        return;
    }

    if(req.body.password.length < 8){
        res.status(400).render('users/Login',{ title:"login",error: 'Password should be atleast 8 characters long'});
        return;
    }
 
    
    try{
        const postLogIn = await usersData.checkUser(req.body.username,req.body.password);
      if(postLogIn.authenticated){
          req.session.user = req.body.username;
          return res.redirect("/");
          
      }
    }
    catch(e){
        res.status(e.error || 500).render('users/login',{title:"login",error: e.message ||`Internal Server Error`})
    }


});

//-------------End of Post Login---------------------//


//   router.get('/private',async (req, res) => {
    
//     if (req.session.user) {
//         return res.render("users/private",{title:"Private", username: req.session.user})
//       }
//     });


//--------------------Get Logout---------------------//
  router.get('/logout',async (req, res) => {
    req.session.destroy();
    return res.render("users/logout",{title:"Logout"})
    

});

//--------------------End of Get Logout------------------//


module.exports = router;
