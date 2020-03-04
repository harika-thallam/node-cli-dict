const Result = require('./httpsclient.js');
function getDefinition (findword)
{
    console.log("inside get definition function");
    var request = "word/"+String(findword)+"/definitions";
    console.log(request);
    //var res = Result.getResult(request);
    // console.log(res);
    // res.then(value=>{
    //     console.log(value.data);
    // })
    getData(request);
   //console.log("promise resolved"); 
}
async function getData(request)
{
    console.log("should wait for result");
    var res = await Result.getResult(request);
    console.log(res);
}
module.exports.getDefinition = getDefinition;