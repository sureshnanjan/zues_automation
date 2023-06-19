/**
 * Category constructor function
 * @param {number} id 
 * @param {string} name
 */
function category(id, name) {
    this.id = id;
    this.name = name;
    
    this.print = function() {
      console.log(`${this.id} - ${this.name} `);
    }
  }
  
  // array of Category instances
  const categories = [
    new category(1, 'Dog'),
    new category(2, 'Cat'),
  ];
  
  //Print Category
  console.log(`\n Categories:`);
  for (let i = 0; i < categories.length; i++) {

    categories[i].print();
  }

  /**
 * Pet constructor function
 * @param {number} id 
 * @param {Category} category 
 * @param {string} name 
 * @param {string} tags 
 * @param {string} status 
 */
function Pet(id, category, name, tags, status) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.tags = tags;
    this.status = status;
  
    this.print = function() {
      console.log(`ID: ${this.id}`);
      console.log(`Category: ${this.category.id}: ${this.category.name}`);
      console.log(`Name: ${this.name}`);
      console.log(`Tags: ${this.tags}`);
      console.log(`Status: ${this.status}`);
    }
  }
     //array of Pet instances
     const petArray = [
        new Pet(100, categories[0], 'Dalmation', 'Spotless Male Puppy Dalmation', 'Available'),
        new Pet(200, categories[1], 'Manx', 'With tail Manx', 'Sold'),
      ];
    
      
    //print pet
    for (let i = 0; i < petArray.length; i++) {
        console.log(`\n Pets:`);
        petArray[i].print();
      }


    /**
 * User constructor function
 * @param {number} id 
 * @param {string} username 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {string} email 
 * @param {string} password 
 * @param {string} phone 

 */
    function User(id, username, firstName, lastName, email, password, phone) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        
        this.print = function() {
            console.log(`ID: ${this.id}`);
            console.log(`Username: ${this.username}`);
            console.log(`firstName: ${this.firstName}`);
            console.log(`lastName: ${this.lastName}`);
            console.log(`email: ${this.email}`);
            console.log(`password: ${this.password}`);
            console.log(`phone: ${this.phone}`);

        }
      }
      
      // array of Category instances
      const userArray = [
        new User(1000, 'USer1','User','One', 'user1@fdgdr.iuy','pa$$word','1234567898'),
        new User(2000, 'User2','USer','Two', 'user2@mkj.ytr','pa$$word','123456789'),
      ];
      
      
      //Print User
      for (let i = 0; i < categories.length; i++) {
        console.log(`\n User:`);
        userArray[i].print();
      }      