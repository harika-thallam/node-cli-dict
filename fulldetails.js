const definition = require('./definition');
const synonym = require('./synonym');
const antonym = require('./antonym');
const example = require('./examples');

async function getFulldetails(findword) {
    //var request ="word/"+String(findword)+"/definitions";
    await definition.getDefinition(findword);
    await synonym.getSynonym(findword);
    await antonym.getAntonym(findword);
    await example.getExamples(findword);
}

module.exports.getFulldetails = getFulldetails;