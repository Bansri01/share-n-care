const ObjectId  = require('mongodb').ObjectId;
const mongoCollections = require('../config/mongoCollections')
const diseases = mongoCollections.diseases

function checkSpace (mystr)
{
    let flag=0;
    for (let i =0;i<mystr.length;i++)
    {
        if (mystr.charAt(i)!=' ')
        {
            flag=1;
            break;
        }
    }

    if (flag===0)
    {
        return true
    }
    else
    {
        return false
    }
}


function isValidObjectId(id){
      
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;        
        return false;
    }
    return false;
}

const createDisease = async function createDisease(diseaseName, description, suggestions,medicines,filters)
{
    
    if (diseaseName==null || description==null || suggestions==null|| medicines==null || filters==null){
       throw `All the input parameter must be provided in the function`;
   }

   if (typeof(diseaseName)!=='string' || typeof(description)==null){
       throw 'The diseaseName and description all should be string. No Other Datatype is allowed!'
   }

   if(checkSpace(diseaseName))
    {
        throw `diseaseName field cannot be just empty spaces`
    }

    if(checkSpace(description))
    {
        throw `description field cannot be just empty spaces`
    }

    if (!Array.isArray(suggestions))
    {
        throw `suggestions is not an array. It should be an array`
    }

    for(i=0;i<suggestions.length;i++)
    {
        if (suggestions[i]==null || suggestions[i]==undefined){
            throw `items in suggestions cannot be null or undefined`;
        }

    
    if (typeof(suggestions[i])!=='string'){
        throw 'The suggestions should be string! No Other Datatype is allowed!'
    }

    if(checkSpace(suggestions[i]))
    {
        throw `Suggestion cannot be just empty spaces`
    }

}

    if (!Array.isArray(medicines))
    {
        throw `medicines is not an array. It should be an array`
    }


    let medicines_len = medicines.length;
    if (medicines_len === 0 ){
        throw 'The medicines array is null. It cannot be null'
    }


    Array.from(medicines).forEach(element=> {

        if (element==null || element==undefined){
            throw `items in Medicines cannot be null or undefined`;
        }

    
    if (typeof(element)!=='string'){
        throw 'The Medicine Names should be string! No Other Datatype is allowed!'
    }

    if(checkSpace(element))
    {
        throw `Medicine Names cannot be just empty spaces`
    }

    });


    if (!Array.isArray(filters))
    {
        throw `filters is not an array. It should be an array`
    }

    let filters_len = filters.length;
    if (filters_len === 0 ){
        throw 'The medicines array is null. It cannot be null'
    }


    Array.from(filters).forEach(element=> {

        if (element==null || element==undefined){
            throw `Items in filter cannot be null`;
        }

    
    if (typeof(element)!=='string'){
        throw 'The filter Names should be string! No Other Datatype is allowed!'
    }

    if(checkSpace(element))
    {
        throw `filter Names cannot be just empty spaces`
    }

    });

    const diseasesCollection = await diseases();

    let newdiseases = {
        diseaseName: diseaseName,
        introduction: description,
        suggestions:suggestions,
        medicines:medicines,
        filters:filters

      };

      const insertInfo = await diseasesCollection.insertOne(newdiseases);
      if (insertInfo.insertedCount === 0) throw 'Could not add restaurant';
        return newdiseases;


}


const searchDisease = async function searchDisease(searchTerm)
{
    if(searchTerm==null || searchTerm==undefined)
    {
        
    }
}   


module.exports={
    createDisease,
    searchDisease

}
