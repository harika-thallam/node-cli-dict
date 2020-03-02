var Input = require('./processinput.js');
  console.log("give your input : ");
    process.stdin.once('data', (input) => {
    let inputOption = input.toString().trim();
    if(inputOption.length)
    {
        console.log("received input");
        var stringArray = inputOption.split(/\s+/);
        Input.processInput(stringArray);
    }
    else
    {
        console.log("no input");
        Input.processInput();
    }
    process.exit();
});
 