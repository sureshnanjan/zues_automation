/**
 * @param {string} Früh This is a constant
 * @param {string} myName Declaring my name which can be changed later on
 * @param {number} myValue This is of type number which is not defined initially
 * After defining value for myValue
 * @param {object} petStoreLogo This is an object for PetStore Logo
 * @param {object} myPets This is an array literal for pets
 */

function grammarJSDoc() {
    const Früh = "foobar";
    console.log(Früh);

    let myName = "Abhishek";
    console.log(`Initially assigned name - ${myName}`);
    myName = "Abhishek Singh";
    console.log(`Changed name - ${myName}`);

    let myValue;
    console.log(`This is the initial value ${myValue}`);
    myValue = 1000;
    console.log(`This is the later value ${myValue}`);

    const petStoreLogo = { color: "green", length: 50, breadth: 30, font: "Times" };
    console.log(petStoreLogo);
    console.log(petStoreLogo["color"]);
    console.log(petStoreLogo.color);
    console.log(petStoreLogo["length"]);
    console.log(petStoreLogo.font);

    const myPets = ['fish', 'dogs', 'cats', 'reptile'];
    console.log(myPets.length);
    console.log(myPets[2]);
}

grammarJSDoc();