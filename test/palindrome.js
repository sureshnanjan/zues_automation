/**
 * Variable declartions
 */
const assert = require ('assert');

let flag;
/**
 * Varible Intialization
 */
flag = false;


 function palindrome(number){ 
   var number,rev,rem,original;   
   original=number;  
 while(number>0)
 {
  rem=number%10;
  rev=(rev*10)+rem;
  number=number/10;
 }
 if(original==rev)
 return flag=true;
 else return flag=false;
}


describe('Testing the number', () =>  {
    describe('Test the number is palindrome', ()=> {
      it('Should return the appropriate message as the number is palindrome', function () {
        console.log(assert.equal(palindrome(353), true));

      });
      it('Should return the appropriate message as the number is not palindrome', function () {
        console.log(assert.equal(palindrome(353), false));
      });
    });
  });