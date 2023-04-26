//Object literal syntax
const obj = {prop1:'value1',prop2:'val2'}
console.log(obj.prop1)
console.log(obj['prop1'])

/**
 * This is a method to say Greeting to a specific person.
 * @param {string} person To set the name of the person.
 */
function sayGreetingToPerson(person) {
    console.log(`Hello how do you do ${person}`);
}

sayGreetingToPerson("Razia");
sayGreetingToPerson("Zeusians");

/**
 * This method allows me to repeat a word that many times
 * @param {string} word Word to repeat
 * @param {number} times Number of times to repeat the above word
 */
function repeatWord(word, times){
    let result = ''
    for (let index = 1; index <= times; index++) {
       
        if (index<times) {
           result += `${word} `
       } else {
           result += `${word}`
       }
        
    }
    return result;
}

console.log(repeatWord('razia',3).length == 17)
console.log(repeatWord('razia',5))



const Category = {id:100, name:'reptile'}
// Abstraction
// E ncapsulation
// Inheritance
// Overloading / Overriding


