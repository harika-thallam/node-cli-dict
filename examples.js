const Result = require('./httpsclient.js');

async function getExamples(findword) {
    var request ="word/"+String(findword)+"/examples";
    console.log(request);
    await Result.getResult(request);
}

module.exports.getExamples = getExamples;