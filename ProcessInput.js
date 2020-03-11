const definition = require('./src/words/definition');
const synonym = require('./src/words/synonym');
const antonym = require('./src/words/antonym');
const example = require('./src/words/examples');
const fulldetails = require('./src/words/fulldetails');
const randomn = require('./src/words/randomn');
//module to process user input

async function processInput(input)
{
  if(input.length == 0)
  {
      return await validate("randomn");
  }
  else if(input.length == 2 )
  {
      return await validate(input[0],input[1]);
  }
  else if(input.length == 1)
  {
      return await validate(input[0]);
  }
  else if(input.length > 2)
  {
     //TODO:invalid input,display an error,figure out error to be thrown
     console.error("invalid input");
  }
}
async function validate(option,word="")
{
  switch(option)
  {
    case "defn":
                console.log(`fetching definition of ${word}`);
                return await definition.getDefinition(word);
    case "syn":
                console.log(`fetching synonym of ${word}`);
                return await synonym.getSynonym(word);
    case "ant":
                console.log(`fetching antonym of ${word}`);
                return await antonym.getAntonym(word);
    case "ex":
               console.log(`fetching example of ${word}`);
               return await example.getExamples(word);
    case "full":
               console.log(`fetching information of ${word}`); 
               return await fulldetails.getFulldetails(word);
    case "randomn"://TODO:make call to display details of randomn word     
               console.log(`fetching details of randomn word`); 
               return await randomn.getRandomn();
    case "play"://TODO:make calls to display details of the word and then guess the word
               console.log(`word play`); 
               break;
  }
}

//var into = ["syn","single"];
//processInput(into);
//processInput();
module.exports.processInput = processInput;