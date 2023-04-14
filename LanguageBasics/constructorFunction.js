//Day 8: 31 Mar 2023
/**
 * This is a constructor function for Category of Pets
 * @param {number} id This is the id of the category
 * @param {string} name This is the name of the category
 */
function Category(id, name) {
    this.id = id;
    this.name = name;
    this.print = function () {
        console.log(`${this.name} - ${this.id}`);
    }
}

let fish = new Category(1, 'fish')
let reptile = new Category(2, 'reptile')
let butterfly = new Category(3, 'butterfly')

fish.print();
reptile.print();
butterfly.print();