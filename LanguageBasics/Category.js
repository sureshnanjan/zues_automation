class Category{
    /**
 * This is a constructor function for Pet Category 
 * @param {number} id id of the category
 * @param {string} name name of the category
 */

constructor(id,name){
    this.id = id;
    this.name= name;
    //this.printCategory = function(){
        //return (`${this.id} - ${this.name}`);
  }
  print() {
      console.log(`Id is ${this.id} and name is ${this.name}.`);
  }
}
let obj1 = new Category(1, 'Deepika');
obj1.print();