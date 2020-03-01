/* eslint-disable no-undef */
//module to process user input

function processInput(input)
{
  if(input.length > 0)
  {
      //call method to display randomn word details
      console.log("arguments array empty");
  }
  else if(input.length == 2 )
  {
      //call method for processing arguments and validation
      console.log("arguments array size is 2");
  }
  else if(input.length == 1)
  {
      //check if argument if play and call the appropraite method
      console.log("arguments array size is 1");
  }
}
module.exports = processInput;