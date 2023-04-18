function Category(id, name){
    this.id = id
    this.name = name
    this.print = function(){
        console.log(`${this.name} - ${this.id}`);
    } 
}

let fish = new Category(1, 'Angel')
let bird = new Category(2, 'Parrot')
let animal = new Category(2, 'Dog')

fish.print();