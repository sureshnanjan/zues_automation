var assert = require('assert');
const { it, describe } = require('mocha');

/**
 * This is a constructor function for Category of Pets
 * @param {number} id This is the id of the category
 * @param {string} name This is the name of the category
 */
function Category(id, name) {
    this.id = id;
    this.name = name;
    this.printCategory = function () {
        console.log(`${this.name} - ${this.id}`);
        return `${this.name} - ${this.id}`;
    }
}

/**
 * This is an array with category names
 */
const categories = ['fish', 'dogs', 'cats', 'reptiles', 'birds'];

/**
 * This is the for loop usage for constructing categories as well as printing categories using printCategory function
 */
for (let index = 1; index <= categories.length; index++) {
    var categoryName = new Category(index, categories[index - 1]);
    categoryName.printCategory();
}

/**
 * This is a constructor function for Pets
 * @param {number} id This is the id of the pet
 * @param {string} name This is the name of the pet
 * @param {string} photoUrls This is the url for the photo of the pet
 * @param {string} status This the availability status of the pet
 */
function Pet(id, name, photoUrls, status) {
    this.id = id;
    this.name = name;
    this.photoUrls = photoUrls;
    this.status = status;
    this.printPet = function () {
        console.log(`${this.id} - ${this.name}, photoUrl - ${this.photoUrls}, status - ${this.status}`);
        return `${this.id} - ${this.name}, photoUrl - ${this.photoUrls}, status - ${this.status}`;
    }
}

/**
 * This is an array with pet names
 */
const pets = ['Goldfish', 'Husky', 'Burmese Cat', 'Snake', 'Parrot'];

/**
 * This is an array with pet statuses
 */
const petStatus = ['available', 'pending', 'sold', 'available', 'sold'];

/**
 * This is the for loop usage for constructing pets as well as printing pets using printPet function
 */
for (let index = 1; index <= pets.length; index++) {
    var petName = new Pet(index + 100, pets[index - 1], `${pets[index - 1]}.png`, petStatus[index - 1]);
    petName.printPet();
}

/**
 * This is a constructor function for Users
 * @param {number} id This is the id of the user
 * @param {string} username This is the username of the user
 * @param {string} firstName This is the firstName of the user
 * @param {string} lastName This is the lastName of the user
 * @param {string} email This is the email of the user
 * @param {string} password This is the password of the user
 * @param {string} phone This is the phone number of the user
 * @param {number} userStatus This is the user status
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
    this.printUser = function () {
        console.log(`${this.id} - ${username}, ${firstName}, ${lastName}, ${email}, ${password}, ${phone}, ${userStatus}`);
        return `${this.id} - ${username}, ${firstName}, ${lastName}, ${email}, ${password}, ${phone}, ${userStatus}`;
    }
}

/**
 * This is an array of usernames
 */
const usernames = ['abhi123', 'john123', 'mark123'];

/**
 * This is an array of user firstname
 */
const firstNames = ['Abhishek', 'John', 'Mark'];

/**
 * This is an array of user lastname
 */
const lastNames = ['Singh', 'Doe', 'Wood'];

/**
 * This is an array of user email
 */
const emails = ['abc1@mail.com', 'abc2@mail.com', 'abc3@mail.com'];

/**
 * This is an array of user password
 */
const passwords = ['pass1', 'pass2', 'pass3'];

/**
 * This is an array of user phone number
 */
const phones = ['123', '456', '789'];

/**
 * This is an array of user statuses
 */
const userStatuses = [1, 2, 3];

/**
 * This is the for loop usage for constructing users as well as printing users using printUser function
 */
for (let index = 1; index <= 3; index++) {
    var userDetails = new User(index, usernames[index - 1], firstNames[index - 1], lastNames[index - 1], emails[index - 1], passwords[index - 1], phones[index - 1], userStatuses[index - 1]);
    userDetails.printUser();
}

/**
 * This is the test suite to verify contructor functions
 */
describe('Testing constructor functions', () => {
    describe('Testing Category constructor function', () => {
        let domestic = new Category(10, 'Domestic');

        it('Category id should be same as provided by the user', () => {
            assert.equal(domestic.id, 10);
        });

        it('Category name should be same as provided by the user', () => {
            assert.equal(domestic.name, 'Domestic');
        });

        it('The printCategory function should print the name and id of the category', () => {
            assert.equal(domestic.printCategory(), 'Domestic - 10');
        });
    });

    describe('Testing Pet constructor function', () => {
        let clownfish = new Pet(1001, 'Clownfish', 'Clownfish.png', 'available');

        it('Pet ID should be same as provided by the user', () => {
            assert.equal(clownfish.id, 1001);
        });

        it('Pet name should be same as provided by the user', () => {
            assert.equal(clownfish.name, 'Clownfish');
        });

        it('Pet photoUrl should be same as provided by the user', () => {
            assert.equal(clownfish.photoUrls, 'Clownfish.png');
        });

        it('Pet status should be same as provided by the user', () => {
            assert.equal(clownfish.status, 'available');
        });

        it('The printPet function should print the id, name, photoUrl and status of the pet', () => {
            assert.equal(clownfish.printPet(), '1001 - Clownfish, photoUrl - Clownfish.png, status - available');
        });
    });

    describe('Testing User constructor function', () => {
        let newUser = new User(201, 'ramesh123', 'Ramesh', 'Kumar', 'rameshkumar@mail.com', 'passramesh', '1234567890', 1);

        it('User id should be same as provided by the user', () => {
            assert.equal(newUser.id, 201);
        });

        it(`User's username should be same as provided by the user`, () => {
            assert.equal(newUser.username, 'ramesh123');
        });

        it('User firstName should be same as provided by the user', () => {
            assert.equal(newUser.firstName, 'Ramesh');
        });

        it('User lastName should be same as provided by the user', () => {
            assert.equal(newUser.lastName, 'Kumar');
        });

        it('User email should be same as provided by the user', () => {
            assert.equal(newUser.email, 'rameshkumar@mail.com');
        });

        it('User password should be same as provided by the user', () => {
            assert.equal(newUser.password, 'passramesh');
        });

        it('User phone number should be same as provided by the user', () => {
            assert.equal(newUser.phone, '1234567890');
        });

        it('User status should be same as provided by the user', () => {
            assert.equal(newUser.userStatus, 1);
        });

        it('The printUser function should print the id, username, firstName, lastName, email, password, phone and userStatus of the user', () => {
            assert.equal(newUser.printUser(), '201 - ramesh123, Ramesh, Kumar, rameshkumar@mail.com, passramesh, 1234567890, 1');
        });
    });
});