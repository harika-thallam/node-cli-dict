/* eslint-disable no-undef */
//module to process user input

function processInput(input)
{
  if(input.length == 0)
  {
      //TODO:call method to display randomn word details
      console.log("arguments array empty");
  }
  else if(input.length == 2 )
  {
      //TODO:call method for processing arguments and validation
      console.log("arguments array size is 2");
  }
  else if(input.length == 1)
  {
      //TODO:check if argument if play and call the appropraite method
      console.log("arguments array size is 1");
  }
  else if(input.length > 2)
  {
     //TODO:invalid input,display an error,figure out error to be thrown
     console.error("invalid input");
  }
}
function validate(option,word)
{
  switch(option)
  {
    case "defn"://TODO:make call to receive definition of the entered word
                break;
    case "syn"://TODO:make call to receive synonym of the entered word
                break;
    case "ant"://TODO:make call to receive antonym of the entered word
               break;
    case "ex"://TODO:make call to receive example usage of the entered word
               break;
    case "full"://TODO:make calls to display all the above information
                break;
    case "randomn"://TODO:make call to display details of randomn word
                break;
    case "play"://TODO:make calls to display details of the word and then guess the word
                break;
  }
}
module.exports.processInput = processInput;