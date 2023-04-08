/**
 * Variable declartions
 */
let i, div, flag;

/**
 * Varible Intialization
 */
flag = false;

/**
 * This function will check whther the number is prime or not
 * @param {number} number 
 */
function PrimeNumber(number){
    div=number/2;      
    if(number==0||number==1){  
        return flag=true;
        //console.log(number+" is not prime number");      
    }
    else{  
        for(i=2;i<=div;i++){      
            if(number%i==0){      
                //console.log(number+" is not prime number");      
               return flag=true;            
            }      
        }      
        //if(flag==false){ 
         //   console.log(number+" is prime number"); 
        //}  
    } 
}
//console.log(PrimeNumber(6));

var assert = require (`assert`)
describe('Testing the number', function (name) {
    describe('Test the number is prime or not', function (name) {
      it('Should return the appropriate message as the number is prime', function () {
        console.log( assert.equal(PrimeNumber(6), false))
       
      });
      it('Should return the appropriate message as the number is not prime', function () {
        console.log( assert.equal(PrimeNumber(6), true))
      });
    });
  });