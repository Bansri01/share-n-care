const express = require('express');
const data = require('../data');
const diseaseData = data.diseases;
const mongoCollections = require('../config/mongoCollections')
const diseaseCollection = mongoCollections.diseases;
const ObjectID  = require('mongodb').ObjectId;
const router = express.Router();




router.get('/:id', async (req, res) => {
    serchTerm = req.params.id

    const disease_list = await diseaseData.searchDisease(serchTerm)
    return res.json(disease_list);
})

router.get('/diseaseID/:id', async (req, res) => {
    id = req.params.id


    try {

        var disease_list = await diseaseData.getDiseaseById(id)
  
      } catch (e) {
          res.status(e.err || 500).render('error/error',{ error: e.msg || 'Internal Server Error',title:"signUp"});
        return;
      }

   

       const {diseaseName,introduction,symptoms,suggestions,medicines} = disease_list;

       res.render('disease/disease', {diseaseName:diseaseName,description:introduction,symptoms:symptoms,suggestions:suggestions,medicines:medicines});
})

module.exports = router;