const ObjectID  = require('mongodb').ObjectId;
const mongoCollections = require('../config/mongoCollections')
const users = mongoCollections.users
const bcrypt = require("bcrypt");
const saltRounds = 10;
const countries = require("countries-list");

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

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
  

async function createUser(profilePicture, firstName, lastName, username, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth){
    if(!profilePicture || !firstName || !lastName || !username || !emailAddress || !password || !phoneNumber || !country || !biography || !gender || !userType || !dateOfBirth){
        throw `All fields must be supplied`
    }

    if(typeof firstName !== "string") throw `firstName must be string`
    if(typeof lastName !== "string" ) throw `lastName must be string`
    if(typeof emailAddress !== "string") throw 'emailAddress must be string'
    if(typeof password !== "string") throw 'password must be string'
    if(typeof country !== "string") throw 'country must be string'
    if(typeof biography !== "string") throw 'biography must be string'
    if(typeof gender !== "string") throw 'gender must be string'
    if(typeof userType !== "string") throw 'userType must be string'
    if(typeof phoneNumber !== "string") throw 'phoneNumber must be string'
    if(typeof dateOfBirth !== "string") throw 'dateOfBirth must be string'
    if(typeof username !== "string") throw `userName must be string`

    if (/^ *$/.test(firstName)) throw `firstName cannot be empty`
    if (/^ *$/.test(lastName)) throw `lastName cannot be empty`
    if (/^ *$/.test(emailAddress)) throw `emailAddress cannot be empty`
    if (/^ *$/.test(password)) throw `password cannot be empty`
    if (/^ *$/.test(country)) throw `country cannot be empty`
    if (/^ *$/.test(biography)) throw `biography cannot be empty`
    if (/^ *$/.test(gender)) throw `gender cannot be empty`
    if (/^ *$/.test(userType)) throw `userType cannot be empty`
    if (/^ *$/.test(phoneNumber)) throw `phoneNumber cannot be empty`
    if (/^ *$/.test(dateOfBirth)) throw `dateOfBirth cannot be empty`
    if (/^ *$/.test(username)) throw `Username cannot be empty`

    if(/[^A-Za-z0-9]/g.test(username)){
        throw `Username should only have numbers and alphabets`
    }

    if(username.length < 4){
        throw `Username should have atleast 4 characters`
    }

    if(!validateEmail(emailAddress)) throw `Please Enter valid Email Address`

    if(/\s/g.test(password)) throw `password cannot have spaces`
    if(password.length < 8){
        throw `Password should be atleast 8 characters long`
    }

    const hashedPwd = await bcrypt.hash(password, saltRounds);

    let phoneRe = /^\d{3}\-\d{3}\-\d{4}$/
    if(!phoneNumber.match(phoneRe)) throw `Phone number must be of format xxx-xxx-xxxx and all numbers`
  
    const countryCodes = Object.keys(countries.countries);
    const countryNames = countryCodes.map(code => countries.countries[code].name);
    if (!countryNames.includes(country)) throw `Please enter a valid country`


    let gen = ["Female", "Male", "other"]

    // if (gender !== "Female" || gender !== "Male" || gender !== "other") throw `Gender must be Male or Female or other`
    if(!gen.includes(gender))

    if (userType !== "Patient" || userType !== "Doctor") throw `Usertype must be a patient or a doctor`

    if (!validateDate(dateOfBirth)) throw `Please Enter valid date of birth`

    const userCollection = await users()

    const lowerUser = emailAddress.toLowerCase()
    const userexists = await userCollection.findOne({ emailAddress: lowerUser})
    if(userexists) throw `User with that email address already exists`

    const lowerUsername = username.toLocaleLowerCase()
    const usertaken = await userCollection.findOne({ username: lowerUsername})
    if(usertaken) throw `Username already taken`


    let newUser = {
        profilePicture: profilePicture,
        firstName: firstName,
        lastName: lastName,
        username: username.toLowerCase(),
        emailAddress: emailAddress.toLowerCase(),
        password: hashedPwd,
        phoneNumber: phoneNumber,
        country: country,
        biography: biography,
        gender: gender,
        userType: userType,
        dateOfBirth: dateOfBirth
    }

    const insertInfo = await userCollection.insertOne(newUser)
    if (insertInfo.insertCount == 0) throw `Could not add user`

    const newId = insertInfo.insertedId.toString();
    const user = await get(newId);

    return JSON.parse(JSON.stringify(user));
}

async function get(id){
    if(!id) throw `You must provide a proper id`
    if(typeof id != 'string') throw `${id} is not string`
    if(/^ *$/.test(id)) throw `id with just empty spaces is not valid`

    const userCollection = await users()
    let getId

    try{
        getId = ObjectID(id);
    }
    catch(e){
        throw `Id is invalid because of ${e}`
    }

    const user = await userCollection.findOne({ _id: getId})

    if(user === null) throw `No user exists with that id`;

    return JSON.parse(JSON.stringify(user));

}



async function updateUser(id, profilePicture, firstName, lastName, emailAddress, phoneNumber, country, biography, gender, userType, dateOfBirth){
    if(!id || !profilePicture || !firstName || !lastName  || !emailAddress || !phoneNumber || !country || !biography || !gender || !userType || !dateOfBirth){
        throw `All fields must be supplied`
    }

    if(typeof firstName !== "string") throw `firstName must be string`
    if(typeof lastName !== "string" ) throw `lastName must be string`
    if(typeof emailAddress !== "string") throw 'emailAddress must be string'
    // if(typeof password !== "string") throw 'password must be string'
    if(typeof country !== "string") throw 'country must be string'
    if(typeof biography !== "string") throw 'biography must be string'
    if(typeof gender !== "string") throw 'gender must be string'
    if(typeof userType !== "string") throw 'userType must be string'
    if(typeof phoneNumber !== "string") throw 'phoneNumber must be string'
    if(typeof dateOfBirth !== "string") throw 'dateOfBirth must be date'
    // if(typeof username !== "string") throw `userName must be string`
    if(typeof id !== 'string') throw `id must be string`

    if (/^ *$/.test(firstName)) throw `firstName cannot be empty`
    if (/^ *$/.test(lastName)) throw `lastName cannot be empty`
    if (/^ *$/.test(emailAddress)) throw `emailAddress cannot be empty`
    // if (/^ *$/.test(password)) throw `password cannot be empty`
    if (/^ *$/.test(country)) throw `country cannot be empty`
    if (/^ *$/.test(biography)) throw `biography cannot be empty`
    if (/^ *$/.test(gender)) throw `gender cannot be empty`
    if (/^ *$/.test(userType)) throw `userType cannot be empty`
    if (/^ *$/.test(phoneNumber)) throw `phoneNumber cannot be empty`
    if (/^ *$/.test(dateOfBirth)) throw `dateOfBirth cannot be empty`
    // if (/^ *$/.test(username)) throw `Username cannot be empty`
    if(/^ *$/.test(id)) throw `id cannot be empty`

    // if(/[^A-Za-z0-9]/g.test(username)){
    //     throw `Username should only have numbers and alphabets`
    // }

    // if(username.length < 4){
    //     throw `Username should have atleast 4 characters`
    // }

    if(!validateEmail(emailAddress)) throw `Please Enter valid Email Address`

    // if(/\s/g.test(password)) throw `password cannot have spaces`
    // if(password.length < 8){
    //     throw `Password should be atleast 8 characters long`
    // }

    // const hashedPwd = await bcrypt.hash(password, saltRounds);

    let phoneRe = /^\d{3}\-\d{3}\-\d{4}$/
    if(!phoneNumber.match(phoneRe)) throw `Phone number must be of format xxx-xxx-xxxx and all numbers`

    const countryCodes = Object.keys(countries.countries);
    const countryNames = countryCodes.map(code => countries.countries[code].name);
    if (!countryNames.includes(country)) throw `Please enter a valid country`

    let gen = ["Female", "Male", "other"]

    // if (gender !== "Female" || gender !== "Male" || gender !== "other") throw `Gender must be Male or Female or other`
    if(!gen.includes(gender))

    if (userType !== "Patient" || userType !== "Doctor") throw `Usertype must be a patient or a doctor`

    if (!validateDate(dateOfBirth)) throw `Please Enter valid date of birth`

    const userCollection = await users()

    const lowerUser = emailAddress.toLowerCase()
    const userexists = await userCollection.findOne({ emailAddress: lowerUser})
    if(userexists) throw `User with that email address already exists`

    // const lowerUsername = username.toLocaleLowerCase()
    // const usertaken = await userCollection.findOne({ username: lowerUsername})
    // if(usertaken) throw `Username already taken`

    let updateId

    try{
        updateId = ObjectID(id);
    }
    catch(e){
        throw `Id is invalid because of ${e}`
    }

    const user = await userCollection.findOne({ _id: updateId})
    if(user === null || user === undefined) throw `Id doesn't exist.`

    const updatedUser = {
        profilePicture: profilePicture,
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress.toLowerCase(),
        phoneNumber: phoneNumber,
        country: country,
        biography: biography,
        gender: gender,
        userType: userType,
        dateOfBirth: dateOfBirth
    }

    const updatedInfo = await userCollection.updateOne({_id: updateId}, {$set: updatedUser});
    if (updatedInfo.modifiedCount === 0) {
        throw `could not update User`;
    }  

    return {userUpdated: true}
}

module.exports = {
    createUser,
    updateUser
}


