/**
 * Category constructor function
 * @param {number} id -  ID of category
 * @param {string} name - Name of category
 */
function Category(id, name) {
    this.id = id;
    this.name = name;
    
    this.print = function() {
      console.log(`${this.id} - ${this.name} `);
    }
  }
  
  // array of Category instances
  const categories = [
    new Category(1, 'Dog'),
    new Category(2, 'Cat'),
  ];
  
  console.log(`\n Category print:`);
  //Print Category
  for (let i = 0; i < categories.length; i++) {

    categories[i].print();
  }

  /**
 * Pet constructor function
 * @param {number} id -  ID of the pet
 * @param {Category} category - category of the pet
 * @param {string} name -  name of the pet
 * @param {string} photoUrls -  photo URLs of the pet
 * @param {Array} tags - tags of the pet
 * @param {string} status -  status of the pet
 */
function Pet(id, category, name, photoUrls, tags, status) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.photoUrls = photoUrls;
    this.tags = tags;
    this.status = status;
  
    this.print = function() {
      console.log(`ID: ${this.id}`);
      console.log(`Category: ${this.category.id}: ${this.category.name}`);
      console.log(`Name: ${this.name}`);
      console.log(`Photo URLs: ${this.photoUrls}`);
      console.log(`Tags: ${this.tags}`);
      console.log(`Status: ${this.status}`);
    }
  }
     //array of Pet instances
     const petArray = [
        new Pet(100, categories[0], 'German Shepard', 'photoUrl.com/dog.jpg', ['friendly', 'loyal'], 'available'),
        new Pet(200, categories[1], 'Persian', 'photoUrl.com/cat.jpg', ['playful', 'curious'], 'Sold'),
      ];
    
      console.log(`\n Pet print: `);
    //print pet
    for (let i = 0; i < petArray.length; i++) {
        petArray[i].print();
      }

/**
 * User constructor function
 * @param {number} id -  ID of user
 * @param {string} username - username of user
 * @param {string} firstName -  firstName of user
 * @param {string} lastName - lastName of user
 * @param {string} email -  email of user
 * @param {string} password - password of user
 * @param {string} phone - phone of user
 * @param {integrer} userStatus - userStatus of user
 */
    function User(id, username, firstName, lastName, email, password, phone, userStatus) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.userStatus = userStatus;
    
    this.print = function() {
        console.log(`ID: ${this.id}`);
        console.log(`Username: ${this.username}`);
        console.log(`firstName: ${this.firstName}`);
        console.log(`lastName: ${this.lastName}`);
        console.log(`email: ${this.email}`);
        console.log(`password: ${this.password}`);
        console.log(`phone: ${this.phone}`);
        console.log(`userStatus: ${this.userStatus}`);
    }
  }
  
  // array of Category instances
  const userArray = [
    new User(1000, 'Marcus10','Marcus','Rashford', 'marcus@gmail.com','password123','8888888888', 404),
    new User(2000, 'Bob7','Bob','Builder', 'bob@gmail.com','password123','9999999999', 500),
  ];
  
  console.log(`\n User print:`);
  //Print User
  for (let i = 0; i < categories.length; i++) {
    userArray[i].print();
  }      