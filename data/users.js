const ObjectID  = require('mongodb').ObjectId;
const mongoCollections = require('../config/mongoCollections')
const users = mongoCollections.users
const bcrypt = require("bcrypt");
const saltRounds = 16;

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateDate(date) {
    let datePattern = /^\d{2}\/\d{2}\/\d{4}$/ 
        if(!date.match(datePattern)) throw `dateOfReview should be in format mm/dd/yyyy`
        const today = new Date()
        let date_arr = date.split("/")
        parsedMonth = Number(date_arr[0])
        parsedDay = Number(date_arr[1])
        parsedYear = Number(date_arr[2])
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
        
        // if (Number(date_arr[1]) > today.getDate() &&
        // Number(date_arr[0]) > (today.getMonth() + 1) &&
        // Number(date_arr[2]) > today.getFullYear()) throw `date of birth cannot be greater than today`

        if (date > today) throw `date of birth cannot be greater than today`

        return true

}
  

async function create(profilePicture, firstName, lastName, username, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth){
    if(!profilePicture || !firstName || !lastName || !userName || !emailAddress || !password || !phoneNumber || !country || !biography || !gender || !userType || !dateOfBirth){
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

    const countryList = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
    ];

    if (!countryList.includes(country)) throw `Please enter a valid coountry`

    if (gender !== "Female" || gender !== "Male" || gender !== "other") throw `Gender must be Male or Female or other`

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
    const user = await this.get(newId);

    return {userInserted: true}; 

}

async function updateUser(id, profilePicture, firstName, lastName, emailAddress, password, phoneNumber, country, biography, gender, userType, dateOfBirth){
    

}




