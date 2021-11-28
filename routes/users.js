const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoCollections = require('../config/mongoCollections')
const data = require('../data');
const userData = data.users;
const userColl = mongoCollections.users;
const ObjectID  = require('mongodb').ObjectId;

