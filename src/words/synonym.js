const Result = require('./httpsclient');

async function getSynonym (findword) {
    var request ="word/"+String(findword)+"/relatedWords";
    console.log(request);
    await Result.getResult(request);
}

module.exports.getSynonym = getSynonym;