/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

var InputModule =  require('./ProcessInput.js');

  console.log("give your input : ");
    process.stdin.once('data', (input) => {
    let recevive = input.toString().trim();
    if(recevive.Length)
    {
        var stringArray = recevive.split(/\s+/);
        console.log("Hello, "+ stringArray[0] + "!"+ stringArray[1]);
    }
    else
    {
        console.log("no input");
    }
    process.exit();
});
 