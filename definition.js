const getResult = require('./httpsclient.js');
const getDefinition = (findword) =>
{
    console.log("inside get definition function");
    var request = "word/"+{findword}+"/definitions";
    console.log(request);
    async () => getResult(request)
          .then(response => {
              if(response.data.message)
              {
                console.log(response.data.message);
              }
          })
          .catch(error => {
              console.log(error);
          })        

}
module.exports.getDefinition = getDefinition;