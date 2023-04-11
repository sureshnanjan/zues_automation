/**
 * This is a function for category
 * @param {*} id id of the category
 * @param {*} name name of the category
 */

function Category(id, name) {
    this.id = id;
    this.name = name;
    this.printCategory = function () {
        //console.log(`${this.name} - ${this.id}`);
        return `${this.name} - ${this.id}`;
    }
}

/**
 * Array for category names
 */
const name =['fish', 'cat']


/**
 * For loop for constructing category function
 */
for (let index = 1; index < name.length; index++) {
    var fish = new Category(index, name[index]) 
}

/**
 * Test cases for the Category constructor function
 */
var assert = require('assert');
describe('Testing the Category Constructor Function', function () {
  describe('Category name and id should be as provided by user', function () {
    it('should return category with ID 3', function () {
      assert.equal(fish.id, 1);
    });
    it('should return correct category name - fish', function () {
        assert.equal(fish.name, 'cat');
      });
    it('should print the correct print value as: fish - 3', function () {
        assert.equal(fish.printCategory(), 'cat - 1');
      });
  });
});

/**
 * This is the function for the Pets
 * @param {*} id id of the pet
 * @param {*} name name of the pet
 * @param {*} photoUrls photo url of the pet
 * @param {*} status status of the pet
 */

function Pet(id, name, photoUrls, status) {
    this.id = id;
    this.name = name;
    this.photoUrls = photoUrls;
    this.status = status;
    this.printPet = function () {
        //console.log(`${this.id} - ${this.name}, photoUrl - ${this.photoUrls}, status - ${this.status}`);
        return `${this.id} - ${this.name}, photoUrl - ${this.photoUrls}, status - ${this.status}`;
    }
}

/**
 * These are the arrays for different parameters in Pet function
 */
const pets = ['Cat', 'Dog', 'Mouse', 'Rabbit', 'Parrot'];
const url = ['CatURL', 'DogURL', 'MouseURL', 'RabbitURL', 'ParrotURL'];
const status = ['available', 'pending', 'sold', 'available', 'sold'];


/**
 * For loop for constructing Pet function
 */

for (let index = 0; index < pets.length; index++) {
    var Pets = new Pet(index,pets[index],url[index],status[index])
}

/**
 * Test cases for the constructor function Pet
 */

describe('Testing the Pets Constructor Function', function () {
  describe('Pets parameters should be as provided by user', function () {
    it('should return category with ID 1', function () {
      assert.equal(Pets.id, 4);
    });
    it('should return correct pet name - Goldfish', function () {
        assert.equal(Pets.name, 'Parrot');
      });
    it('should return the correct photo url as: GoldfishURL', function () {
        assert.equal(Pets.photoUrls, 'ParrotURL');
      });
    it('should return the correct available status as: available', function () {
        assert.equal(Pets.status, 'sold');
      });  
    it('The printPet function should print the id, name, photoUrl and status of the pet', () => {
        assert.equal(Pets.printPet(), '4 - Parrot, photoUrl - ParrotURL, status - sold');
    });  
    
  });
});


/**
 * This is a function for the User Details 
 * @param {*} id Id of the user
 * @param {*} username username of the user
 * @param {*} firstName first name of the user
 * @param {*} lastName last name of the user
 * @param {*} email email of the user
 * @param {*} password password of the user
 * @param {*} phone phone number of the user
 * @param {*} userStatus status of the user
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
        //console.log(`${this.id} - ${username}, ${firstName}, ${lastName}, ${email}, ${password}, ${phone}, ${userStatus}`);
        return `${this.id} - ${username}, ${firstName}, ${lastName}, ${email}, ${password}, ${phone}, ${userStatus}`;
    }
}

/**
 * Array for the different parameters in the user function
 */
const usernames = ['shivaji123', 'shivam123', 'shivansh123'];
const firstNames = ['Shivaji', 'Shivam', 'Shivansh'];
const lastNames = ['Darade', 'Darade', 'Darade'];
const emails = ['test1@mail.com', 'test2@mail.com', 'test3@mail.com'];
const passwords = ['test1', 'test2', 'test3'];
const phones = ['111', '222', '333'];
const userStatuses = [1, 2, 3];

/**
 * For loop for constructing users function
 */

for (let index = 0; index < usernames.length-2; index++) {
    var newUser = new User(index,usernames[index],firstNames[index],lastNames[index],emails[index], passwords[index] ,phones[index],userStatuses[index])
}

/**
 * test cases for the user function.
 */

describe('Testing the users Constructor Function', function () {
    describe('User parameters should be as provided by user', function () {
        it('Should return user id same as provided by the user', () => {
            assert.equal(newUser.id, 0);
        });

        it(`Should return user name same as provided by the user`, () => {
            assert.equal(newUser.username, 'shivaji123');
        });

        it('Should return user fname same as provided by the user', () => {
            assert.equal(newUser.firstName, 'Shivaji');
        });

        it('Should return user lname same as provided by the user', () => {
            assert.equal(newUser.lastName, 'Darade');
        });

        it('Should return user email same as provided by the user', () => {
            assert.equal(newUser.email, 'test1@mail.com');
        });

        it('Should return user password same as provided by the user', () => {
            assert.equal(newUser.password, 'test1');
        });

        it('Should return user phone number same as provided by the user', () => {
            assert.equal(newUser.phone, '111');
        });

        it('Should return user status same as provided by the user', () => {
            assert.equal(newUser.userStatus, 1);
        });

        it('The printUser function should print the id, username, firstName, lastName, email, password, phone and userStatus of the user', () => {
            assert.equal(newUser.printUser(), '0 - shivaji123, Shivaji, Darade, test1@mail.com, test1, 111, 1');
        });  
      
    });
  });
