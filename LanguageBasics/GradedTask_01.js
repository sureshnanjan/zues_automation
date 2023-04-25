var assert = require('assert');
const { describe } = require('mocha');
describe('This is a to verify function', function() {
  describe('This is for testing category constructor', function () {
    it('It should verify the values of an category', function() {
      var Cats = new Category(1,'Cats');
      assert.equal(Cats.id,1);
      assert.equal(Cats.name,'Cats');

    });
  });
  describe('This is for testing APIresponse', function () {
    it('It should verify the APIresponse constructor', function() {
      var api = new APIResponse(100, 'This is type', 'This is a message');
      assert.equal(api.code,100);
      assert.equal(api.type,'This is type');
      assert.equal(api.message,'This is a message');

    });
  });
  describe('This is for testing user function', function () {
    it('It should verify the user constructor', function() {
      var use = new User(1, 'Sabak','Saba','Khan', 'saba.khan@zeuslearning.com',  'password@123', '10987654321', 0);
      assert.equal(use.id,1);
      assert.equal(use.username,'Sabak');
      assert.equal(use.firstName,'Saba');
      assert.equal(use.lastName,'Khan');
      assert.equal(use.email,'saba.khan@zeuslearning.com');
      assert.equal(use.password,'password@123');
      assert.equal(use.phone,'10987654321');
      assert.equal(use.userStatus,0);
    });
  });
  describe('This is for testing tag function', function () {
    it('It should verify the tag constructor', function() {
      var tag = new Tag(1,'funny');
      assert.equal(tag.id,1);
      assert.equal(tag.name,'funny');
    });
  });
  describe('This is for testing order function', function () {
    it('It should verify the order constructor', function() {
        var Order1 = new Order("1","856",1,"2023-04-30","approved",true);
        assert.equal(Order1.id,1);
        assert.equal(Order1.petId,"856");
        assert.equal(Order1.quantity,1);
        assert.equal(Order1.shipDate,"2023-04-30");
        assert.equal(Order1.status,'approved');
        assert.equal(Order1.complete,true);
      });
    });
});

/**
 * This is a constructor function
 * @param {integer} id for of the pet
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
    new Category(4, 'Crocdile')
  ];
  
  // Print all category values
  for (let Category of Categories) {
    Category.print();
  }

  /**
   * This is a constructor function
   * @param {integer} code Code of the APIresponse
   * @param {string} type This is type of APIresponse
   * @param {string} message This is message for APIresponse
   */
  function APIResponse(code, type , message) {
    this.code = code;
    this.type = type;
    this.message = message;

    this.print = function() {
      console.log(`code : ${this.code}, type: ${this.type} , message: ${this.message}`);
    }
  }

  //This is array for APIresponse
  let APIResponses = [
    new APIResponse(100, 'This is type for Dog ' , 'This is a valid message'),
    new APIResponse(200, 'This is type for Cat ' , 'This is a valid message'),
    new APIResponse(300, 'This is type for Fish' , 'This is a valid message'),
    new APIResponse(400, 'This is type for Crocodile' , 'This is a valid message'),

  ];

  // Print all the Apiresponse values
  for (let APIResponse of APIResponses) {
    APIResponse.print();
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
    new User(1, 'Sabak','Saba','Khan', 'saba.khan@zeuslearning.com',  'password@123', '10987654321', 0),

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
    new Tag(101,'Funny1'),
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
    new Order("1","856258",1,"2023-04-30","pending",true),
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
