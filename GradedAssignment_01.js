var assert = require('assert');
describe('This is a to verify function', function() {
  describe('This is for testing category constructor', function () {
    it('It should verify the values of an category', function() {
      var Cats = new Category(1,'Cats');
      assert.equal(Cats.id,1);
      assert.equal(Cats.name,'Cats');

    });
  });
  describe('This is for testing Apiresponse', function () {
    it('It should verify Apiresponse constructor', function() {
      var api = new ApiResponse(100, 'This is type', 'This is a message');
      assert.equal(api.code,100);
      assert.equal(api.type,'This is type');
      assert.equal(api.message,'This is a message');

    });
  });
  describe('This is for testing user function', function () {
    it('It should verify the user constructor', function() {
      var use = new User(1, 'Dakshata.n','Dakshata','Narkar', 'dakshata.narkar@zeuslearning.com',  'automation@123', '7894545451', 01);
      assert.equal(use.id,1);
      assert.equal(use.username,'Dakshata.n');
      assert.equal(use.firstName,'Dakshata');
      assert.equal(use.lastName,'Narkar');
      assert.equal(use.email,'dakshata.narkar@zeuslearning.com');
      assert.equal(use.password,'automation@123');
      assert.equal(use.phone,'7894545451');
      assert.equal(use.userStatus,01);
    });
  });
  describe('This is for testing tag function', function () {
    it('It should verify the tag constructor', function() {
      var tag = new Tag(1804,'shepherd');
      assert.equal(tag.id,1804);
      assert.equal(tag.name,'shepherd');
    });
  });
  describe('This is for testing order function', function () {
    it('It should verify the order constructor', function() {
        var Order1 = new Order("2","cat01",1,"2023-04-24","approved",true);
        assert.equal(Order1.id,2);
        assert.equal(Order1.petId,"cat01");
        assert.equal(Order1.quantity,1);
        assert.equal(Order1.shipDate,"2023-04-24");
        assert.equal(Order1.status,'approved');
        assert.equal(Order1.complete,true);
      });
    });
    describe('This is for testing pet function', function () {
        it('It should verify the pet constructor', function() {
        var Pet1 = new Pet(2,"Rocky",Categories[1],"abc.jpeg",Tags[0],"sold");
        assert.equal(Pet1.id,2);
        assert.equal(Pet1.name,"Rocky");
        assert.equal(Pet1.Category.id,2);
        assert.equal(Pet1.Category.name,"Cats");
        assert.equal(Pet1.photoUrls,"abc.jpeg");
        assert.equal(Pet1.Tag.id,101);
        assert.equal(Pet1.Tag.name,"Rocky");
        assert.equal(Pet1.status,"sold");
        
        });  
     });
    
});

/**
 * This is a constructor function
 * @param {integer} id Id of the pet
 * @param {string} name Name of the pet
 */
function Category(id, name) {
    this.id = id;
    this.name = name;
    this.print = function() {
      console.log(`id : ${this.id}, name: ${this.name} `);
    }
  }

  // This is array for Categories
  let Categories = [
    new Category(1, 'Dogs'),
    new Category(2, 'Cats'),
    new Category(3, 'Fish'),
    new Category(4, 'Crocodile')
  ];
  
  // Print all category values
  for (let Category of Categories) {
    Category.print();
  }

  /**
   * This is a constructor function
   * @param {integer} code Code of the apiresponse
   * @param {string} type This is type of apiresponse
   * @param {string} message This is message for apiresponse
   */
  function ApiResponse(code, type , message) {
    this.code = code;
    this.type = type;
    this.message = message;

    this.print = function() {
      console.log(`code : ${this.code}, type: ${this.type} , message: ${this.message}`);
    }
  }

  //This is array for Apiresponse
  let ApiResponses = [
    new ApiResponse(100, 'This is type for Dog ' , 'This is a valid message'),
    new ApiResponse(200, 'This is type for Cat ' , 'This is a valid message'),
    new ApiResponse(300, 'This is type for Fish' , 'This is a valid message'),
    new ApiResponse(400, 'This is type for Crocodile' , 'This is a valid message'),

  ];

  // Print all the Apiresponse values
  for (let ApiResponse of ApiResponses) {
    ApiResponse.print();
  }
  
  /**
   * This is a constructor function
   * @param {integer} id This is unique id of the user
   * @param {string} username This is the useename of the user
   * @param {string} firstName This isthe first name of the user
   * @param {string} lastName This is the last name of the user
   * @param {string} email This is the email of the user
   * @param {string} password This is the password of the user
   * @param {string} phone This is the phone number of the user
   * @param {integer} userStatus This is the user status of the user
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
      console.log(`User ID: ${this.id}\nUsername: ${this.username}\nName: ${this.firstName} ${this.lastName}\nEmail: ${this.email}\nPassword: ${this.password}\nPhone: ${this.phone}\nUser Status: ${this.userStatus}`);
    }
  }

// This is an array for Users
  let Users = [
    new User(1, 'dakshata','Dakshata','Narkar', 'dakshata.narkar@zeuslearning.com',  'automation@123', '7894545451',01),
    new User(2, 'tomc','tom','c', 'tom@example.com',  'password@123', '9000047533', 100)

  ]
  
  // This is user to print values of User
  for (let User of Users) {
    User.print();
  }

  /**
   * This is a construtor function
   * @param {*} id This is id of tag
   * @param {*} name This is the name of tag
   */
  function Tag(id, name) {
    this.id = id;
    this.name = name;
    this.print = function() {
      console.log(`Tag = Name: ${this.name} - ID: ${this.id}`);
    }
  }
  
  //This is array for Tags
  let Tags = [
    new Tag(101,'Rocky'),
    new Tag(102,'Tom')

  ]

  //This is to print values for Tag
  for (let Tag of Tags) {
    Tag.print();
  }

/**
 * This function is used to generate different parameters of Order
 * @param {integer} id Id is unique order id
 * @param {integer} petId petId is unique id of pet
 * @param {integer} quantity quantity is the number of specific pet order
 * @param {string} shipDate ShipDate is the date of shipping pets
 * @param {string} status status is the status of the order placed
 * @param {boolean} complete complete show if kt is True of False
 */
function Order(id, petId, quantity, shipDate, status, complete) {
    this.id = id;
    this.petId = petId;
    this.quantity = quantity;
    this.shipDate = shipDate;
    let validStatus = ['placed', 'approved', 'delivered'];
    for(i=0;i<3;i++) {
        if(status==validStatus[i]){
            this.status=status;
        }
    }
    this.complete = complete;
  
    this.print = function() {
      console.log("Order ID: " + this.id);
      console.log("Order Pet ID: " + this.petId);
      console.log("Order Quantity: " + this.quantity);
      console.log("Order Ship Date: " + this.shipDate);
      console.log("Order Status: " + this.status);
      console.log("Order Complete: " + this.complete);
    }
}

//Creates an array for order
let Orders = [
    new Order("2","pet11",1,"2023-03-03","approved",true),
];

 //Print the orders values
for (let Order of Orders) 
{
    Order.print();
 }

 /**
  * This is a constructor function
  * @param {integer} id 
  * @param {string} name 
  * @param {string} category 
  * @param {string} photoUrls 
  * @param {string} tags 
  * @param {string} status 
  */
 function Pet(id, name, Category, photoUrls, Tag, status) {
    this.id = id;
    this.name = name;
    this.Category = Category;
    this.photoUrls = photoUrls;
    this.Tag = Tag;
    let validStatus = ['available', 'pending', 'sold'];
    for(i=0;i<3;i++) {
        if(status==validStatus[i]){
            this.status=status;
        }
    }
    this.print = function() {
      console.log(`Pet ID: ${this.id}\nName: ${this.name}`);
      console.log('Category:');
      this.Category.print();
      console.log(`Photo URLs: ${this.photoUrls}`);
      console.log('Tags:');
      this.Tag.print();
      console.log(`Status: ${this.status}`);
    }
}

// This is array for Pets
let Pets = [
    new Pet("2","Rocky",Categories[2],"abc.jpeg",Tags[0],"sold"),
];

//This is to print values of pet
for (let Pet of Pets) 
{
    Pet.print();
 }
