var assert = require('assert');
describe('testing contructor functions', function() {
  describe('category', function () {
    it('should create a Category instance with attributes ', function() {
      var cat = new category(1, 'cat');
      assert.equal(cat.id, 1);
      assert.equal(cat.name, 'cat');
    });
  describe('print', function() {
    it('should log the category name and id to the console', function() {
      assert.equal(array1[0].print(), 'fish - 1');
    });
  });
});
 describe('testing apiresponses', function () {
    it('should create a api response instance with correct properties', function() {
        var success = new apiresponses(100,"success1","We found it1");
        assert.equal(success.code,100);
        assert.equal(success.type,"success1");
        assert.equal(success.message,"We found it1");
      });
    });
 describe('testing users', function () {
    it('should create a users instance with correct properties', function() {
          var user1 = new user(1,
                'JaneRizzoli',
                'Jane',
                'Rizzoli',
                'janeRizzoli@gmail.com',
                'Password',
                '123-456-7890',
                1
              );
          assert.equal(user1.id,1);
          assert.equal(user1.username,'JaneRizzoli');
          assert.equal(user1.firstName,'Jane');
          assert.equal(user1.lastName,"Rizzoli");
          assert.equal(user1.email,"janeRizzoli@gmail.com");
          assert.equal(user1.password,"Password");
          assert.equal(user1.phone,"123-456-7890");
          assert.equal(user1.userStatus,1);
          });
     });
     describe('order', function () {
        it('should create a order instance with correct properties', function() {
            var order1 = new order(1,1,1,"2023-04-03","delivered",true);
            assert.equal(order1.id,1);
            assert.equal(order1.petId,1);
            assert.equal(order1.quantity,1);
            assert.equal(order1.shipDate,"2023-04-03");
            assert.equal(order1.status,'delivered');
            assert.equal(order1.complete,true);
          });
        });
     describe('tag', function () {
            it('should create a tag instance with correct properties', function() {
                //var colourful = new tag(1,"colourful");
                assert.equal(tags[0].id,1);
                assert.equal(tags[0].name,"small");
              });
            });
     describe('pet', function () {
                it('should create a pet instance with correct properties', function() {
                    //var Ringo = new pet(1,"Ringo",array1[2],"https://www.petimage1.com/ringo.jpg",tags[0],"pending");
                    //var Ringo = pets[0];
                    assert.equal(pets[0].id,1);
                    assert.equal(pets[0].name,"Ringo");
                    assert.equal(pets[0].category.id,3);
                    assert.equal(pets[0].category.name,'cat');
                    assert.equal(pets[0].photoUrls,"https://www.petimage1.com/ringo.jpg");
                    assert.equal(pets[0].tags.id,'1');
                    assert.equal(pets[0].tags.name,'small');
                    assert.equal(pets[0].status,'pending');
                  });
                });      
});

/**
 * This will help put the pet by its category
 * @param {integer} id unique id of the pet 
 * @param {string} name and category of the pet 
 */

function category(id,name){
    this.id =id  
    this.name =name
    this.print =function(){
        console.log(`${this.name} - ${this.id}`);
    }
}
//array to take in the values for different categories  
var array1 = [
    new category(1,"fish"),
    new category(2,"reptile"),
    new category(3,"cat"),
]; 

//to print the values  
for(i=0;i<3;i++){
    array1[i].print();
}

/**
 *this is to define api responses   
 * @param {integer} code api response code 
 * @param {string} type api response type 
 * @param {} message api response message 
 */
function apiresponses(code,type,message){
    this.code = code
    this.type =type
    this.message=message
    this.printApiresponses =function(){
        console.log(`${this.code} - ${this.type}-${this.message}`);
    }
}

//To take in the values of api response 
var apiresponses1 =[
    new apiresponses(200,"success","We found it"),
    new apiresponses(400,"failed","not found"),
];

// To print the api responses 
for(i=0;i<apiresponses1.length;i++){
    apiresponses1[i].printApiresponses();
}

/**
 * User details are captured
 * @param {integer} id user id --> unique among users 
 * @param {string} username username of user 
 * @param {string} firstName first name 
 * @param {string} lastName last name of user 
 * @param {string} email of the user 
 * @param {string} password of the user 
 * @param {string} phone of the user
 * @param {integer} userStatus - status of user
 */

function user(id, username, firstName, lastName, email, password, phone, userStatus) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.userStatus = userStatus;
    this.printUserDetails = function() {
      console.log(`User ID: ${this.id}\nUsername: ${this.username}\nName: ${this.firstName} ${this.lastName}\nEmail: ${this.email}\nPassword: ${this.password}\nPhone: ${this.phone}\nUser Status: ${this.userStatus}`);
    }
}

var user1= [
    new user(1,
        'JaneRizzoli',
        'Jane',
        'Rizzoli',
        'janeRizzoli@gmail.com',
        'Password',
        '123-456-7890',
        1
      ),   
    new user(2,
        'HarryPotter',
        'Harry',
        'Potter',
        'harrypotter@hogwarts.com',
        'Newpassword',
        '220-232-4576',
        2
        ),
];

for(i=0;i<user1.length;i++){
    user1[i].printUserDetails();
}

/**
 * This helps to define different types of tags manufactured 
 * @param {integer} id - unique among the tags 
 * @param {string} name name of the tag --
 */

function tag(id, name) {
    this.id = id;
    this.name = name;
    this.printTag = function() {
      console.log(`Tag: ${this.name} - ID: ${this.id}`);
    }
}

var tags =[
    new tag(1,"small"),
    new tag(2,"colourful"),
];

for(i=0;i<tags.length;i++){
    tags[i].printTag();
}

/**
 * pet details are captured 
 * @param {integer} id unique among the pets 
 * @param {string} name of the pet 
 * @param {string} category different types of pets 
 * @param {string} photoUrls photos link 
 * @param {array} tags tags given to the pet
 * @param {array} status available for adoption or not ? 
 */

function pet(id, name, category, photoUrls, tags, status) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.photoUrls = photoUrls;
    this.tags = tags;
    var petstatus=["available","pending","sold"];
    for(i=0;i<3;i++){
        if(status==petstatus[i]){
            this.status=status;
        }
    }
    this.printPet = function() {
      console.log(`Pet ID: ${this.id}\nName: ${this.name}`);
      console.log('Category:');
      this.category.print();
      console.log(`Photo URLs: ${this.photoUrls}`);
      console.log('Tags:');
      this.tags.printTag();
      console.log(`Status: ${this.status}`);
    }
}

var pets = [
    new pet(1,"Ringo",array1[2],"https://www.petimage1.com/ringo.jpg",tags[0],"pending"),
];

for(i=0;i<pets.length;i++){
    pets[i].printPet();
}

/**
 * Order details are captured in this.
 * @param {integer} id - order id - unique across all orders  
 * @param {integer} petId - pet id - unique across all pets 
 * @param {integer} quantity - quantity of pets 
 * @param {date} shipDate - date of shipping  
 * @param {string} status - order status 
 * @param {boolean} complete - is order complete? true/false ? 
 */

function order(id, petId, quantity, shipDate, status, complete) {
    this.id = id;
    this.petId = petId;
    this.quantity = quantity;
    this.shipDate = shipDate;
    var validStatus = ['placed', 'approved', 'delivered'];
    for(i=0;i<3;i++) {
        if(status==validStatus[i]){
            this.status=status;
        }
    }
    this.complete = complete;
  
    this.printOrder = function() {
      console.log("Order ID: " + this.id);
      console.log("Order Pet ID: " + this.petId);
      console.log("Order Quantity: " + this.quantity);
      console.log("Order Ship Date: " + this.shipDate);
      console.log("Order Status: " + this.status);
      console.log("Order Complete: " + this.complete);
    }
}

var orders = [
    new order(1,1,1,"2023-04-03","delivered",true),
    new order(2,2,2,"2023-04-05","shipped",false),
];

for(i=0;i<orders.length;i++){
    orders[i].printOrder();
}