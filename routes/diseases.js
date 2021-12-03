const express = require('express');
const data = require('../data');
const DiseaseData = data.diseases;
const mongoCollections = require('../config/mongoCollections')
const diseaseCollection = mongoCollections.diseases;
const ObjectID  = require('mongodb').ObjectId;
const router = express.Router();




router.get('/:id', async (req, res) => {
    serchTerm = req.params.id

    const disease_list = await DiseaseData.searchDisease(serchTerm)
    return res.json(disease_list);
})

router.get('/diseaseID/:id', async (req, res) => {
    id = req.params.id

    const disease_list = await DiseaseData.getDiseaseByName(serchTerm)
    //return res.json(disease_list);
})

module.exports = router;