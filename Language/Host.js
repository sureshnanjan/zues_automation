let globaldata = 100;
NamedFunction();
console.log(`Global data value is ${globaldata}`);

function NamedFunction(){
    let varinFunction = 200;
    let globaldata = 250;

    console.log("Function Declared");
    console.log(`Insidie the function the value is ${varinFunction}`);
    varinFunction = 300;
    console.log(`Insidie the function the value is ${varinFunction}`);
    console.log(`Global data value is ${globaldata}`);
    globaldata = 2200;
    console.log(`Global data value is ${globaldata}`);


}

console.log(`Global data value is is ${globaldata}`);
