
let globalData =100;
namedFUnction();
console.log(data);
console.log(`Inside function the value is ${varFunction}`)
console.log(`value of globalData ${globalData}`)
function namedFUnction(){
    let varFunction =100;
    let globalData=150;
    console.log("Function Declared");
    console.log(`value of globalData ${globalData}`)
    console.log(`Inside function the value is ${varFunction}`)
    varFunction=200;
    console.log(`Inside function the value is ${varFunction}`)
    globalData=500;
    console.log(`value of globalData ${globalData}`)
   function Print(print){
    console.log(print)
   }
   Print(globalData)
}

var data="test"
console.log(data);
