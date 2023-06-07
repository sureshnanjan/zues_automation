/**
 * Variable declartions
 */
let flag;

/**
 * Varible Intialization
 */
flag = false;

/**
 * Checking Even no.
 * @param {number} number 
 */
 function EvenNumber(number){     
  if(number%2==0){  
      return flag=true;
      //console.log(number+" is even");      
  }
  else{  
      //console.log(number+" is Odd");      
        return flag=false;                  
  } 
}
//console.log(EvenNumber(6));

var assert = require (`assert`)
describe('Testing the number', function (name) {
    describe('Test the number is even', function (name) {
      it('Should return the appropriate message as the number is even', function () {
        console.log( assert.equal(EvenNumber(6), true))
       
      });
      it('Should return the appropriate message as the number is not even', function () {
        console.log( assert.equal(EvenNumber(6), false))
      });
    });
  });