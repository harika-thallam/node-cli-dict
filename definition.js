const Result = require('./httpsclient.js');

const getDefinition = (findword) => {
    var request ="word/"+String(findword)+"/definitions";
    console.log(request);
    Result.getResult(request);
}

module.exports.getDefinition = getDefinition;