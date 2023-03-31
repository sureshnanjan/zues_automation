let globalData = 100
NamedFunction();
console.log(data)

function NamedFunction(){
    let varInFunction = 100;
    let globalData = 150;
    console.log("Function Declared")
    console.log(`Value of varInFunction is ${varInFunction}`);
    console.log(`Value of globalData inside the function is declared as ${globalData}`);
    globalData = 500;
    console.log(`Value of globalData inside the function is changed to ${globalData}`);
    varInFunction = 200;
    console.log(`Value of varInFunction changed to ${varInFunction}`)

    if (varInFunction == 200) {
        let value = 10;
        console.log(value);
    } else {
        console.log(value) //Else will give error because value is defined only in if block
    }
}

//let data = "Test" //This will give error
var data = "Test" //This will display undefined

console.log(`Value of globalData outside of the function is ${globalData}`);