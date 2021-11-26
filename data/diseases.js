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

    if (typeof suggestions !== 'object'){

        throw 'serviceOptions field should be an object'
    }

    


}


const searchDisease = async function searchDisease()
{
    
}   


modules.export={
    createDisease,
    searchDisease

}
