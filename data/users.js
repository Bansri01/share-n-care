const ObjectID  = require('mongodb').ObjectId;
const mongoCollections = require('../config/mongoCollections')
const users = mongoCollections.users

async function create(profilePicture, firstName, lastName, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth){
    if(!profilePicture || !firstName || !lastName || !emailAddress || !password || !phoneNumber || !country || !biography || !gender || !userType || !dateOfBirth){
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
    if(typeof dateOfBirth !== "date") throw 'dateOfBirth must be date'

    




}





