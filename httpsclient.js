const axios = require('axios');

let baseUrl = "https://fourtytwowords.herokuapp.com/";
let apikey = "b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164";

async function getResult(request)
{
  console.log("inside get result");
   request=baseUrl+request;
   request=request+"?api_key="+apikey;
   return await axios.get(request)
    .then((resp) => {
        console.log(resp);
        return resp;
      }, (error) => {
        console.log(error);
        return error;
        
    }); 
    //console.log("completed axios get");
}
module.exports.getResult = getResult;