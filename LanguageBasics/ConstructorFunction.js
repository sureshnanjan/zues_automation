/**
 * This a Category function
 * @param {*} id Specify Id of a category
 * @param {*} name Specify Name of a category
 */
function Category(id, name){
    this.id = id;
    this.name = name;
    this.print = function(){
        console.log(`${this.id} - ${this.name}`)
    }
}

console.log(fish.name);
console.log(reptile.name);
console.log(dog.name);

fish.print();
reptile.print();
dog.print();
