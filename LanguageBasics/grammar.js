/**
  https://petstore.swagger.io/ 
 This is a constant declaration
 Value of this constant cannot be changed
 const - Language keyword
 Früh - Identifier
 Literal - 100, 88.90, 100n
 String Literal - "Bushra", "Stuart", "Playwright"
 Boolean Literal - true, false
 */
const Früh = "foobar";
console.log(Früh)

/* Other way of declaring a variable */
let myValue;
console.log(`Value: ${myValue}`)
myValue = 1000
console.log(`Value: ${myValue}`)

/* Declaring a variable and then changing its value */
let myName = "Bushra";
console.log(`Value: ${myName}`)
myName = "Another one"
console.log(`Value: ${myName}`)

/* Changing the type of the variable */
myName = 10
console.log(`Value :${myName}`)

/* This is a representation of an object
 PetStoreLogo is an object
 color, length, breadth, font are all the properties of the object */
const PetStoreLogo = {
    color: "green",
    length: 20,
    breadth: 10,
    font: "Times"
}

/* To access the properties of object */
console.log(PetStoreLogo.color)
console.log(PetStoreLogo["font"])

/* This is a representation of an array */
const myPets = ["fish", "cats", "dogs"]
console.log(myPets)