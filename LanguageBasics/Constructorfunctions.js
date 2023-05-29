/**
 * Constructor function for Category.
 * @constructor
 * @param {number} id - The ID of the category
 * @param {string} name - The name of the category.
 */
 function Category(id,name){
    this.id = id;
    this.name = name;
    this.print = function(){
        console.log(`${this.name} - ${this.id}`)
    }
}

// Array of Category

const categories = ['Fish, Dogs, Cats, Reptiles, Birds']

// Below is the For loop for constructing and printing categories using printCategory function

for (let index = 1; index <= categories.length; index++) {
    var categoryName = new Category(index, categories[index - 1]);
    categoryName.printCategory();
}

/**
 * Constructor function for Pets
 * @param {number} id - The id of the pet
 * @param {string} name - The name of the pet
 * @param {string} photoUrls - The url for the photo of the pet
 * @param {string} status - The availability status of the pet
 */
 function Pet(id, name, photoUrls, status) {
    this.id = id;
    this.name = name;
    this.photoUrls = photoUrls;
    this.status = status;
    this.printPet = function () {
        console.log(`${this.id} - ${this.name}, photoUrl - ${this.photoUrls}, status - ${this.status}`);
        return `${this.id} - ${this.name}, photoUrl - ${this.photoUrls}, status - ${this.status}`;
    }
}

// Array of pet names
const pets = ['Goldfish', 'Husky', 'Burmese Cat', 'Snake', 'Parrot'];

// Array of pet status
const petStatus = ['available', 'pending', 'sold', 'available', 'sold'];

// Below is the for loop for constructing and printing pets using printPet function
for (let index = 1; index <= pets.length; index++) {
    var petName = new Pet(index + 100, pets[index - 1], `${pets[index - 1]}.png`, petStatus[index - 1]);
    petName.printPet();
}

