const Result = require('./httpsclient');

async function getRandomn() {
    var request ="words/randomWord";
    console.log(request);
    await Result.getResult(request);
}

module.exports.getRandomn = getRandomn;