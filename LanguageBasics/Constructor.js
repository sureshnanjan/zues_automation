function category(id,name){
    this.id = id;
    this.name=name
    this.print= function(){
        console.log(`${this.name} - ${this.id}`)
    }
}

let fish= new category(1,'fish')
let reptile= new category(2,'reptile')
let dog= new category('3','dogs');

let fishol= {id:1, name: "fish", print: function(){}}
fish.print();
reptile.print();
dog.print();