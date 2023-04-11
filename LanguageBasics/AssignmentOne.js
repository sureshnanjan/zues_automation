/**
 * Display all types of pets in the store
 * @param {} id Category Id should be a integer
 * @param {} name Category name should be a string
 */

function Category(id, name){
    this.id = id;
    this.name = name;
    this.print = function(){
        //console.log("Category")
        console.log(`ID: ${this.id} & Name: ${this.name}`)
    }
}

let fish = new Category('FI-FW-01','Koi')

//Test for Category function
/**
var assert = require('assert');
    describe('Test to verify the Category function', function() {
        it('Check the values', function() {
            assert.equal(fish.print(),"ID: FI-FW-01 & Name: Koi");
    });
});
 */

/**
 * Display all types of pets in the store
 * @param {Number} id Category Id should be a Integer
 * @param {String} name Category name should be a String 
 * @param {String} photoUrls Photo URLs should be a String
 * @param {String} status Status should be a String
 */

function Pet(id, name, photoUrls, status){
    this.id = id;
    this.name = name;
    this.photoUrls = photoUrls;
    this.status = status;
    this.print = function(){
    //console.log("Pet")
    console.log(`ID: ${this.id}, Name: ${this.name}, PhotoUrls: ${this.photoUrls}, Status: ${this.status}`)
    }
}

let reptile = new Pet('RP-SN-01','Rattlesnake','www.test.com', 'Out of Stock')

//Test for Pet function
/**
    describe('Test to verify the Pet function', function() {
        it('Check the values', function() {
            assert.equal(reptile.print(),"ID: RP-SN-01, Name: Rattlesnake, PhotoUrls: www.test.com, Status: Out of Stock");
    });
});
 */


/**
 * Display all types of pets in the store
 * @param {Number} id Category Id should be a Number
 * @param {String} name Category name should be a String
 */
function Tag(id, name){
    this.id = id;
    this.name = name;
    this.print = function(){
        //console.log("Tag")
        console.log(`Tag ID: ${this.id} & Name: ${this.name}`)
    }
}

let friendly = new Tag(10,'Dog')

//Test for tag function
/**
    describe('Test to verify the Tag function', function() {
        it('Check the values', function() {
            assert.equal(friendly.print(),"Tag ID: 10 & Name: Dog");
    });
});
 */


/**
 * Display all types of pets in the store
 * @param {Number} id Category Id should be a number
 * @param {Number} petId Category name should be a number
 * @param {Number} quantity Quantity should be a number
 * @param {Number} shippedData
 * @param {String} status Status should be a string
 * @param {Boolean} complete Complete should be a boolean
 * 
 */
function Order(id, petId, quantity, shippedDate, status, complete){
    this.id = id;
    this.petId = petId;
    this.quantity = quantity;
    this.shippedDate = shippedDate;
    this.status = status;
    this.complete = complete;
    this.print = function(){
        //console.log("Order")
        console.log(`ID: ${this.id}, PetID: ${this.petId}, Quantity: ${this.quantity}, Shipped Date: ${this.shippedDate}, Status: ${this.status}, Complete: ${this.complete}`)
    }
}

let orderOne = new Order(20,120,1,'5/5/2023','Placed',true)

//Test for order function
/**
    describe('Test to verify the Order function', function() {
        it('Check the values', function() {
            assert.equal(orderOne.print(),"ID: 20, PetID: 120, Quantity: 1, Shipped Date: 5/5/2023, Status: Placed, Complete: true");
    });
});
 */

/**
 * Display all types of pets in the store
 * @param {Number} id Category Id should be a number
 * @param {String} username Username should be a string
 * @param {String} firstName First name should be a string
 * @param {String} lastName Last name should be a string
 * @param {String} email Email should be a string
 * @param {String} password Password should be a string
 * @param {Number} phone Phone should be a number
 * @param {String} userStatus User status should be a string
 * 
 */

function User(id, username, firstName, lastName, email, password, phone, userStatus){
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.userStatus = userStatus;
    this.print = function(){
        //console.log("User")
        console.log(`ID: ${this.id}, Username: ${this.username}, First Name: ${this.firstName}, Last Name: ${this.lastName}, Email: ${this.email}, Password: ${this.password}, Phone: ${this.phone}, User Status: ${this.userStatus}`)
    }
}

let userOne = new User(001,'JessalM','Jessal','Manidhar','jessal.manidhar@zeuslearning.com','password123',1234567890,'Active')

//Test for user function
/**
    describe('Test to verify the User function', function() {
        it('Check the values', function() {
            assert.equal(userOne.print(),"ID: 001, Username: JessalM, First Name: Jessal, Last Name: Manidhar, Email: jessal.manidhar@zeuslearning.com, Password: password123, Phone: 1234567890, User Status: Active");
    });
});
 */
    
fish.print()
reptile.print()
friendly.print()
orderOne.print()
userOne.print()
