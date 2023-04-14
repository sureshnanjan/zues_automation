var assert = require('assert');

/**
 * This is a constructor function for Category of Pets
 * @param {number} id This is id of category
 * @param {string} name This is name of category
 */
function Category(id, name) {
    this.id = id;
    this.name = name;
    this.printCategory = function () {
        console.log(`${this.name} - ${this.id}`);
        return `${this.name} - ${this.id}`;
    };
};

/**
 * This is an array with category names
 */
const categoryName = ['fish', 'butterfly', 'dogs'];

/**
 * This is for loop added for constructing and printing categories
 */
for (let index = 1; index <= categoryName.length; index++) {
    var categories = new Category(index, categoryName[index - 1]);
    categories.printCategory();
};

/**
 * This is a constructor function for Pets
 * @param {number} id This is id of pet
 * @param {string} name This is name of pet
 * @param {string} photoUrls This is url for photo of pet
 * @param {string} status This is to check availability status of pet
 */
function Pet(id, name, photoUrls, status) {
    this.id = id;
    this.name = name;
    this.photoUrls = photoUrls;
    this.status = status;
    this.printPet = function () {
        console.log(`${this.id} - ${this.name}, photoUrl - ${this.photoUrls}, status - ${this.status}`);
        return `${this.id} - ${this.name}, photoUrl - ${this.photoUrls}, status - ${this.status}`;
    };
};

/**
 * This is an array with pet names
 */
const pets = ['Cat', 'Dog', 'Starfish'];

/**
 * This is an array with pet status
 */
const petStatus = ['available', 'pending', 'sold'];

/**
 * This is for loop added for constructing and printing Pet
 */
for (let index = 1; index <= pets.length; index++) {
    var petName = new Pet(index + 10, pets[index - 1], `${pets[index - 1]}.png`, petStatus[index - 1]);
    petName.printPet();
};

/**
 * This is a constructor function for Users
 * @param {number} id This is id of user
 * @param {string} username This is username of user
 * @param {string} firstName This is firstName of user
 * @param {string} lastName This is lastName of user
 * @param {string} email This is email of user
 * @param {string} password This is password of user
 * @param {string} phone This is phone number of user
 * @param {number} userStatus This is user status
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
    };
};

/**
 * This is an array of usernames
 */
const usernames = ['user1', 'user2', 'user2'];

/**
 * This is an array of user firstname
 */
const firstNames = ['Rutuja', 'Snehal', 'Madhura'];

/**
 * This is an array of user lastname
 */
const lastNames = ['Jadhav', 'Raut', 'Patil'];

/**
 * This is an array of user email
 */
const emails = ['user1@mail.com', 'user2@mail.com', 'user3@mail.com'];

/**
 * This is an array of user password
 */
const passwords = ['user@1', 'user@2', 'user@3'];

/**
 * This is an array of user phone number
 */
const phoneNumber = ['001', '002', '003'];

/**
 * This is an array of user status
 */
const userStatuses = [1, 2, 3];

/**
 * This is for loop added for constructing and printing users
 */
for (let index = 1; index <= 3; index++) {
    var userDetails = new User(index, usernames[index - 1], firstNames[index - 1], lastNames[index - 1], emails[index - 1], passwords[index - 1], phoneNumber[index - 1], userStatuses[index - 1]);
    userDetails.printUser();
}

/**
 * This is test suite to verify constructor functions
 */
describe('Testing constructor functions', () => {
    describe('Testing Category constructor function', () => {
        let Birds = new Category(3, 'Birds');

        it('Name and id of category should be same as added by user', () => {
            assert.equal(Birds.printCategory(), 'Birds - 3');
        });
    });

    describe('Testing Pet constructor function', () => {
        let Star = new Pet(101, 'Star', 'Star.png', 'pending');

        it('Id, name, photoUrl and status of pet should be as added by user', () => {
            assert.equal(Star.printPet(), '101 - Star, photoUrl - Star.png, status - pending');
        });
    });

    describe('Testing User constructor function', () => {
        let newUser = new User(5, 'user4', 'Sayali', 'Sarang', 'user4@mail.com', 'user@4', '004', 2);

        it('Id, username, firstName, lastName, email, password, phone and userStatus of user should be as per added by user', () => {
            assert.equal(newUser.printUser(), '5 - user4, Sayali, Sarang, user4@mail.com, user@4, 004, 2');
        });
    });
});