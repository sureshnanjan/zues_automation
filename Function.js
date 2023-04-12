/**
 * This is a basic function of greeting someone you meet.
 * There are no parameters present.
 */
function Greetings1() {
  let result3 = "Hello, hope you are doing well.";
  console.log(result3);
  return result3;
}   

Greetings1(); //1st line
const result1 = Greetings1(); //2nd line

/**
 * This is a function as asking someone how they are.
 * @param {string} name This a string parameter where a name has to be passed. 
 */
function Greetings2(name) {
    result2 = `Hi, how are you ${name}?`;
    return result2;
}
console.log(Greetings2("Somename")); //3rd line


function loop(word,times) {
 let result2 = "";
        for (let index = 1; index <= times; index++) {
            if (index<times) {
                result2 = result2 + `${word} `; 
            } else {
                result2 = result2 + `${word}`;
            }
            
        }
        //console.log(result2); 
        //console.log(result2.length); 
 return result2;
}
console.log(loop("bird",4) == "bird bird bird bird"); //4th and 5th line
console.log(loop("maithili",2).length == 18); //6th, 7th and 8th line

function myFunc(theArr) {
    theArr[0] = 30;
    return theArr;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30

var assert = require('assert');
describe('Description of loop function', function () {
  describe('It should display if the length added is correct or not', function () {
    it('Passing the function and its parameter', function () {
      assert.equal(loop("maithili",2).length, 17);
    });
    it('Passing the function and its parameter', function () {
        assert.equal(loop("alpha",3).length, 15);
      });
    it('MyFunc inserts valu correctly', function () {
        const result4 = myFunc([]);
        assert.equal(result4[0], 40);
    });
    it('MyFunc is not empty', function () {
        assert.equal(myFunc([]).length, 0);
    });
    it('Greetings1 function testing', function () {
      assert.equal(Greetings1().length, 20);
  });
  it('Greetings1 function testing', function () {
    let result = Greetings2("Maithili");
    assert.equal(console.log(result),"Hi, how are you Maithii?" );
});
  });
});

describe("Testing describe command - ", function() {
  it("First test case for Greetings2 function", function() {
    assert.equal(Greetings2("Maithili").length,31);
  })
})

 
  



