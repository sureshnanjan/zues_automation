//Day 6: 24 Mar 2023
/**
 * @param {string} Fruh This is a constant
 * @param {string} myName Declaring my name which can be changed later on
 * @param {object} PetStoreLogo This is an object for PetStore Logo
 * @param {object} myPets This is an array literal for pets
 */

function grammarJSDocument() {
    const Fruh = "foobar";
    console.log(Fruh);
    //const- language keyword
    //Fruh is Identifier
    //"foobar" is Literal. Example-100,88.90,100n. can be string literal, boolean literal
    //"Suresh",'Rutuja'
    //true false

    let myValue1;
    console.log(`This is the initial value of myvalue1 without init- ${myValue1}`); //output is undefined for myvalue1
    myValue1 = 1000;
    console.log(`This is the later value of myvalue1- ${myValue1}`);
    let myname = "rutuja";
    //Fruh = 100;
    myname = "another name";
    let myValue; //declaration
    /**
     * myValue is of Type integer
    */
    myValue = 200
    console.log(`The value is ${myValue}`)

    const PetStoreLogo = { color: "green", length: 20, breath: 10, font: "times" }
    console.log(`Color of petstore logo is ${PetStoreLogo.color}`)//way 1 to access object 
    console.log(`Color of petstore logo is ${PetStoreLogo["color"]}`)//way 2 to access object
    console.log(PetStoreLogo);
    console.log(`Length of petstore logo is ${PetStoreLogo["length"]}`);
    console.log(`Font of petstore logo is ${PetStoreLogo.font}`);

    const myPets = ['fish', 'dogs', 'cats', 'reptile']
    console.log(`Length of myPets array is ${myPets.length}`);
    console.log(`Second element of myPets array is ${myPets[1]}`);
}

grammarJSDocument();