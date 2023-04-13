
/**
 * This is a constructor function for Pet Category 
 * @param {number} id id of the category
 * @param {string} name name of the category
 */

function Category(id,name){
    this.id = id;
    this.name= name;
    this.printCategory = function(){
        return (`${this.id} - ${this.name}`);
  }
}

/**
 * This is an array of diffrenet pet categories
 */
 const categories = ['Fish', 'Reptiles', 'Dogs', 'Cats', 'Birds'];

var assert = require (`assert`)
    describe('Testing the Categoory', function (name) {
    describe('Testing Category function', () => {
            /**
             * This is the for loop to print details of the all different pet categories
             */
            for (let i = 0; i < categories.length; i++) {
                let categoryName = new Category(i+1, categories[i]);
                const categories1 = ['Reptiles', 'Fish', 'Dogs', 'Cats', 'Birds'];

            it('Category Details should be same as provided by the array', () => {
                    assert.equal(categoryName.printCategory(), `${i+1} - ${categories1[i]}`);
            });
        }   
             
      });
    });



/**
 * This is a constructor function for Tag Details 
 * @param {number} id id of the Tag
 * @param {string} name name of the Tag
 */

 function Pet(id,name){
    this.id = id;
    this.name= name;
    //this.photoUrl = url
    this.printPet = function(){
       // console.log(`Pet ID is ${this.id} and Pet name is ${this.name}.`)
       //return (`${this.id} - ${this.name}`);
       return (`Pet ID is ${this.id} and Pet name is ${this.name}.`);
    }
}

/**
 * This is an array of diffrenet pets
 */
 const pets = ['Angelfish', 'Rattlesnake', 'Bulldog', 'Manx', 'Amazon Parrot'];

 var assert = require (`assert`)
    describe('Testing the Pets', function (name) {
    describe('Testing Pet function', () => {
            /**
             * This is the for loop to print details of the all different pets
             */
            for (let i = 0; i < pets.length; i++) {
                let petName = new Pet(i+1, pets[i]);            
            it('Pets Details should be same as provided by the array', () => {
                    assert.equal(petName.printPet(), `Pet ID is ${i+1} and Pet name is ${pets[i]}.`);
            });
        }                
      });
    });

/**
 * This is a constructor function for Tag Details 
 * @param {number} id id of the Tag
 * @param {string} name name of the Tag
 */
 function Tag(id,name){
    this.id = id;
    this.name= name;
    this.printTag = function(){
       return (`${this.id} - ${this.name}`);
    }
}
/**
 * This is an array of diffrenet Tags
 */
 const tags = ['Large Angelfish	', 'Venomless Rattlesnake', 'Male Adult Bulldog	', 'Tailless Manx', 'Adult Male Amazon Parrot'];

 var assert = require (`assert`)
    describe('Testing the Tags', function (name) {
    describe('Testing Tag function', () => {
                   /**
                     * This is the for loop to print details of the all different pet tags
                     */
                    for (let i = 0; i < tags.length; i++) {
                        let tagName = new Tag(i+1, tags[i]);
                        it('Tags Details should be same as provided by the array', () => {
                            assert.equal(tagName.printTag(), `${i+1} - ${tags[i]}`);
                    });
                }    
            });
        });

// /**
//  * This is a constructor function for Order Details 
//  * @param {number} id id of the order
//  * @param {number} petId petid of the order 
//  * @param {number} quantity quantity of the order
//  * @param {string} shipDate shipDate of the order
//  * @param {string} status status array of the order
//  * @param {boolean} complete 

// */
//         function Order(id, petId, quantity, shipDate, status, complete){
//             this.id=id;
//             this.petId=petId;
//             this.quantity=quantity;
//             this.shipDate=shipDate;
//             this.status=status;
//             this.complete=complete;
//             this.printOrders = function(){
//                 return (`${this.id} - ${this.name}`);
//              }
//             }    
            
//             /**
//  * This is an array of diffrenet Orders
//  */
//  const orders = ['Large Angelfish	', 'Venomless Rattlesnake', 'Male Adult Bulldog	', 'Tailless Manx', 'Adult Male Amazon Parrot'];
//  const status=['placed', 'approved', 'delivered'];


//             // print
//             var assert = require (`assert`)
//             describe('Testing the Orders', function (name) {
//             describe('Testing Order function', () => {
//                    /**
//                      * This is the for loop to print details of the all different pet tags
//                      */
//                     for (let i = 0; i < orders.length; i++) {
//                         let orders1 = new Order(i+1, orders[i],status,);
//                         it('Orders Details should be same as provided by the array', () => {
//                             assert.equal(orders1.printOrders(), `${i+1} - ${orders[i]}`);
//                     });
//                 }    
//             });
//         });        