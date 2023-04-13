class Pet extends Category{
    /**
    * This is a constructor function for Tag Details 
    * @param {number} id id of the Tag
    * @param {string} name name of the Tag
    */
    constructor(id,name,catid,catname){
       let CategoryConstr = super(catid,catname);
       this.id = id;
       this.name= name;
       //return (`${CategoryConstr}. Pet ID is ${this.id} and Pet name is ${this.name}.`);
       }

}

let petName = new Pet(1, 'Angelfish',101,'Fish');
console.log(petName);
   
//    const pets = ['Angelfish', 'Rattlesnake', 'Bulldog', 'Manx', 'Amazon Parrot'];
//    const categories = ['Fish', 'Reptiles', 'Dogs', 'Cats', 'Birds'];

//  var assert = require (`assert`)
//     describe('Testing the Pets', function (name) {
//     describe('Testing Pet function', () => {
//             /**
//              * This is the for loop to print details of the all different pets
//              */
//             for (let i = 0; i < pets.length; i++) {
//                 let petName = new Pet(i+1, pets[i],i+1,categories[i]);            
//             it('Pets Details should be same as provided by the array', () => {
//                     assert.equal(petName, `$${i+1} - ${categories[i]}. Pet ID is ${i+1} and Pet name is ${pets[i]}.`);
//             });
//         }                
//       });
//     });