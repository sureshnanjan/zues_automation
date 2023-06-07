/***
 * myValue is int type
 */
let myValue = 2000;
console.log(`My value without init  ${myValue}`);

let notAssignedValue;
console.log(notAssignedValue); // logs "undefined"

/**
 * pet store logo
 */
const petStoreLogo = {color : "green",length:20,breath:10,font:"times"}
console.log(petStoreLogo.color);
console.log(petStoreLogo.font);
console.log(petStoreLogo["length"]);

/**
 * pets list
 */

const myPets = ['fish','dog','cat','reptiles']
console.log(`My pet list ${myPets}`);