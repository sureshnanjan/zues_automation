/**
 * This is a constant declaration
 * Value of this constant cannot be changed
 * const - Language keyword
 * Früh - Identifier
 * Literal - 100, 88.90, 100n
 * String Literal - "Rumi", "Kevin", "playwright"
 * Boolean Literal - true, false
 */
const Früh = "foobar";
console.log(Früh)

/**
 * Another way of declaring a variable
 * Value of this can be changed later
 */
let myValue;
console.log(`Value of this is ${myValue}`)
myValue = 1000
console.log(`Value of this is ${myValue}`)

/**
 * Declaring a variable and then changing its value
 */
let myName = "Rumi";
console.log(`Value of this is ${myName}`)
myName = "Another one"
console.log(`Value of this is ${myName}`)

/**
 * Changing the type of the variable
 */
myName = 10
console.log(`Value of this is ${myName}`)

/**
 * This is a representation of an object
 * PetStoreLogo is an object
 * color, length, breadth, font are all the properties of the object
 */
const PetStoreLogo = {
    color: "green",
    length: 20,
    breadth: 10,
    font: "Times"
}

/**
 * To access the properties of object
 */
console.log(PetStoreLogo.color)
console.log(PetStoreLogo["font"])

/**
 * This is a representation of an array
 */
const myPets = ["fish", "cat", "dog"]
console.log(myPets)
