var assert = require('assert');
describe('Testing the Divide function', function() {
    it('Should return 4 for 8/2', function(){
        var result = divide(8,2);
        assert.equal(result,4);
    });
    it('Should return infinite when divided by 0', function(){
        var result = divide(8,0);
        assert.equal(result,Infinity);
    });    
    it('Should return 0 when divided 0 by any number', function(){
        var result = divide(0,2);
        assert.equal(result,0);
    });    
    it('Should handle negative number division', function(){
        var result = divide(-10,2);
        assert.equal(result,-5);
    });
    it('Should return validation message when num1 is empty', function(){
        var result = divide('',2);
        assert.equal(result,'Provide valid number');
    });
    it('Should return validation message when num2 is empty', function(){
        var result = divide(10,'');
        assert.equal(result,"Provide valid number");
    });
});

function divide(num1,num2) {
    if(num1==='' || num2===''){
        return "Provide valid number";
    }
    else{
        return num1 / num2;
    }
}
