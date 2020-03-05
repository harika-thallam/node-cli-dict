const Result = require('./httpsclient.js');

async function getAntonym (findword){
    var request ="word/"+String(findword)+"/relatedWords";
    console.log(request);
    await Result.getResult(request);
}

module.exports.getAntonym = getAntonym;