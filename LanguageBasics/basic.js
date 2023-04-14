function Category(id,name){
  this.id = id;
  this.name = name
  this.print = function(){
  console.log(`${this.name} - ${this.id}`)
  }
  }

  Category(2,'fish')