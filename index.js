/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

var InputModule =  require('./processinput.js');

  console.log("give your input : ");
    process.stdin.once('data', (input) => {
    let inputOption = input.toString().trim();
    if(inputOption.length)
    {
        console.log("received input");
        var stringArray = inputOption.split(/\s+/);
        InputModule.processInput(stringArray);
    }
    else
    {
        console.log("no input");
        InputModule.processInput();
    }
    process.exit();
});
 