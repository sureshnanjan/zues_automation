/**
 * Constructor function for pets categoies
 * @param {number} id id of the category
 * @param {string} name name of the category
 */
function Category(id, name){
    this.id = id;
    this.name = name;
    this.printCategory = function(){
        console.log(`${this.name} - ${this.id}`);
        return `${this.name} - ${this.id}`;
    }
}

/**
 * Array for categories
 */
const categories = ['Fish', 'Dogs', 'Cats', 'Reptiles', 'Birds'];

/**
 * Loop for printing and constructing categories
 */
for (let index = 0; index < categories.length; index++){
    var categoryDetails = new Category(index, categories[index]);
    categoryDetails.printCategory();
}

/**
 * Constructor function for pets
 * @param {number} id id of the pet
 * @param {string} name name of the pet
 * @param {string} imageUrl photo url of the pet
 * @param {string} status status of the pet
 */
function Pet(id, name, imageUrl, status){
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.status = status;
    this.printPet = function(){
        console.log(`${this.id} - PetName - ${this.name}, PhotoUrl - ${this.imageUrl}, Status - ${this.status}`);
        return `${this.id} - ${this.name}, PhotoUrl - ${this.imageUrl}, Status - ${this.status}`;
    }
}

/**
 * Name of pets
 */
const pets = ['Angelfish', 'Bulldog', 'Manx', 'Rattlesnake', 'Amazon Parrot'];

/**
 * Array with pet status
 */
const petStatus = ['Available', 'Sold', 'Sold', 'Sold', 'Available'];

/**
 * Loop for printing and constructing pets
 */
for (let index = 0; index < pets.length; index++) {
    var petDetails = new Pet(9999 + index, pets[index], `${pets[index]}.png`, petStatus[index]);
    petDetails.printPet();
}

/**
 * Constructor function for Users
 * @param {number} id id of the user
 * @param {string} username username of the user
 * @param {string} firstName firstName of the user
 * @param {string} lastName lastName of the user
 * @param {string} email email of the user
 * @param {string} password password of the user
 * @param {string} phone phone number of the user
 * @param {number} userStatus user status
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
    this.printUser = function () {
        console.log(`${this.id} - ${username}, ${firstName}, ${lastName}, ${email}, ${password}, ${phone}, ${userStatus}`);
        return `${this.id} - ${username}, ${firstName}, ${lastName}, ${email}, ${password}, ${phone}, ${userStatus}`;
    }
}

/**
 * Array of usernames
 */
const usernames = ['testuser1', 'testuser2'];

/**
 * Array of user firstname
 */
const firstNames = ['Firstname1', 'Firstname2'];

/**
 * Array of user lastname
 */
const lastNames = ['Lastname1', 'Lastname1'];

/**
 * Array of user email
 */
const emails = ['testuser1@test.com', 'testuser2@test.com'];

/**
 * Array of user password
 */
const passwords = ['Password123', 'Password123'];

/**
 * Array of user phone number
 */
const phones = ['1111111111', '2222222222'];

/**
 * Array of user statuses
 */
const userStatuses = [1, 2];

/**
 * Loop for printing and constructing user
 */
for (let index = 0; index < usernames.length; index++){
    var userDetails = new User(index, usernames[index], firstNames[index], lastNames[index], emails[index], passwords[index], phones[index], userStatuses[index]);
    userDetails.printUser();
}

/**
 * Test suite to verify contructor functions
 */

var assert = require('assert');

describe('Testing constructor functions', function(){
    describe('Testing constructor function Category', function(){
        let marine = new Category(5, 'Marine');

        it('Category id should be same as input', function(){
            assert.equal(marine.id, 5);
        })

        it('Category name should be same as input', function(){
            assert.equal(marine.name, 'Marine');
        })

        it('The printCategory function should print category details - id and name', function(){
            assert.equal(marine.printCategory(), 'Marine - 5');
        })
    })

    describe('Testing constructor function Pet', function(){
        let turtle = new Pet(1000, 'Turtle', 'turtle.png', 'Pending');

        it('Pet ID should be same as input', function(){
            assert.equal(turtle.id, 1000);
        })

        it('Pet name should be same as input', function(){
            assert.equal(turtle.name, 'Turtle');
        })

        it('Pet photoUrl should be same as input', function(){
            assert.equal(turtle.imageUrl, 'turtle.png');
        })

        it('Pet status should be same as input', function(){
            assert.equal(turtle.status, 'Pending');
        })

        it('The printPet function should print pet details - id, name, photoUrl, status', function(){
            assert.equal(turtle.printPet(), '1000 - PetName -  Turtle, PhotoUrl - turtle.png, Status - Pending');
        })
    })

    describe('Testing User constructor function', function(){
        let newUser = new User(2, 'testuser3', 'Firstname3', 'Lastname3', 'testuser3@test.com', 'Password123', '3333333333', 1);

        it('User id should be same as provided by the user', function(){
            assert.equal(newUser.id, 2);
        })

        it(`User's username should be same as provided by the user`, function(){
            assert.equal(newUser.username, 'testuser3');
        })

        it('User firstName should be same as provided by the user', function(){
            assert.equal(newUser.firstName, 'Firstname3');
        })

        it('User lastName should be same as provided by the user', function(){
            assert.equal(newUser.lastName, 'Lastname3');
        })

        it('User email should be same as provided by the user', function(){
            assert.equal(newUser.email, 'testuser3@test.com');
        })

        it('User password should be same as provided by the user', function(){
            assert.equal(newUser.password, 'Password123');
        })

        it('User phone number should be same as provided by the user', function(){
            assert.equal(newUser.phone, '3333333333');
        })

        it('User status should be same as provided by the user', function(){
            assert.equal(newUser.userStatus, 1);
        })

        it('The printUser function should print the id, username, firstName, lastName, email, password, phone and userStatus of the user', function(){
            assert.equal(newUser.printUser(), '2 - testuser3, Firstname3, Lastname3, testuser3@test.com, Password123, 3333333333, 1');
        })
    })
})