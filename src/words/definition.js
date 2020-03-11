const Result = require('./httpsclient');

async function getDefinition(findword) {
    var request ="word/"+String(findword)+"/definitions";
    console.log(request);
    await Result.getResult(request);
}

module.exports.getDefinition = getDefinition;