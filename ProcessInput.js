const definition = require('./definition.js');
//module to process user input

async function processInput(input)
{
  if(input.length == 0)
  {
      //TODO:call method to display randomn word details
      validate("randomn");
      console.log("arguments array empty");
  }
  else if(input.length == 2 )
  {
      return await validate(input[0],input[1]);
  }
  else if(input.length == 1)
  {
      //TODO:check if argument if play and call the appropraite method
      validate(input[0]);
      console.log("arguments array size is 1");
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
    case "defn"://TODO:make call to receive definition of the entered word
                console.log(`fetching definition of ${word}`);
                return await definition.getDefinition(word);
    case "syn"://TODO:make call to receive synonym of the entered word
                console.log(`fetching synonym of ${word}`);
                break;
    case "ant"://TODO:make call to receive antonym of the entered word
                console.log(`fetching antonym of ${word}`);
               break;
    case "ex"://TODO:make call to receive example usage of the entered word
               console.log(`fetching example of ${word}`);
               break;
    case "full"://TODO:make calls to display all the above information
               console.log(`fetching information of ${word}`); 
               break;
    case "randomn"://TODO:make call to display details of randomn word     
               console.log(`fetching details of randomn word`); 
               break;
    case "play"://TODO:make calls to display details of the word and then guess the word
               console.log(`word play`); 
               break;
  }
}
module.exports.processInput = processInput;