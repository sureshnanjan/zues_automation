/*Constructor for Category */
function Category(id, name){
    this.id = id;
    this.name = name;
    this.print = function(){
    console.log(`${this.id} - ${this.name}`);
    }
}

/* Constructor for Pet */
function Pet(id, name, photoUrls, tags, i){
    this.id = id;
    this.name=name;
    this.photoUrls = photoUrls;
    this.tags = tags;
    this.status = [ "available", "pending", "sold" ]; /* As per swagger, status can have only 3 values [ available, pending, sold ]. So declaring array with 3 values*/
    this.print = function(){
        console.log(`${this.id} - ${this.name} - ${this.photoUrls} - ${this.tags} - ${this.status[i]} `);
    }
}

/* Calling each function with object */
let fish = new Category(1, 'fish');
let pet1 = new Pet (1, 'Angelfish', 'https://petstore.octoperf.com/images/fish1.gif', 1, 2); /* status[2] = sold*/

/* Printing each object */
fish.print();
pet1.print();


