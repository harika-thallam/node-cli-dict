var Input = require('./processinput.js');



    console.log("give your input : ");
 
    process.stdin.once('data',async (input) => {
    let inputOption = input.toString().trim();
    if(inputOption.length)
    {
        console.log("received input");
        var stringArray = inputOption.split(/\s+/);
        var tasktocomplete=Input.processInput(stringArray);
        await Promise.all(tasktocomplete);
    }
    else
    {
        console.log("no input");
        Input.processInput();
    }
    process.exit();
});


  
 