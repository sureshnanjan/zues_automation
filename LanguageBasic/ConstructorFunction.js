var assert = require('assert')

/**
 * This is a function for category
 * @param {*} id id of the category
 * @param {*} name name of the category
 */

function Category(id, name){
    this.id = id
    this.name = name
    this.print = function(){
        console.log(`${this.name} - ${this.id}`);
    } 
}

let fish = new Category(1, 'Angel')
let bird = new Category(2, 'Parrot')
let animal = new Category(3, 'Dog')

fish.print();

describe('Category name and id should be as provided by user', function () {
    it('should return category with ID', function () {
      assert.equal(fish.id, 1)
      assert.equal(bird.id, 2)
      assert.equal(animal.id, 3)
    })
    it('Correct category name for fish', function () {
        assert.equal(fish.name, 'Angel')
      })
    it('Print value as:', function () {
        assert.equal(fish.printCategory(), 'fish - 1');
      })
  })

  /**
 * This is the function for the Pets
 * @param {*} id id for the pet
 * @param {*} name name for the pet
 * @param {*} status status for the pet
 * @param {*} photoUrls photo url for the pet
 */

   function Pet(id, name, photoUrls, status) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.photoUrls = photoUrls;
    this.printPet = function () {
        console.log(`${this.id} - ${this.name}, photoUrl - ${this.photoUrls}, status - ${this.status}`);
    }
}

const pets = ['Goldfish', 'Fish', 'Bird']
const url = ['GoldfishURL', 'FishUrl', 'BirdUrl']
const petStatus = ['Available', 'Pending', 'Sold out']

let Pets = new Pet(1,'Goldfish','GoldfishURL','Available')

describe('To verify the pet parameters', function () {
  it('Category with ID as 1', function () {
    assert.equal(Pets.id, 1);
  });
  it('Check pet name is: Goldfish', function () {
      assert.equal(Pets.name, 'Goldfish');
    });
  it('Check photo url is: GoldfishURL', function () {
      assert.equal(Pets.photoUrls, 'GoldfishURL');
    });
  it('Check status is: available', function () {
      assert.equal(Pets.status, 'Available');
    });  
  it('Print the id, name, photoUrl and status of the pet', () => {
      assert.equal(Pets.printPet(), '1 - Goldfish, photoUrl - GoldfishURL, status - Available');
  });  
  
});

/**
 * User details
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
    console.log(`ID: ${this.id}, Username: ${this.username}, First Name: ${this.firstName}, Last Name: ${this.lastName}, Email: ${this.email}, Password: ${this.password}, Phone: ${this.phone}, User Status: ${this.userStatus}`)
  }
}

let userOne = new User(001,'Relvis','Relvis','Buthello','relvisyt37@gmail.com','Password123',123456789,'Active')

//Test for user function

  describe('To verify the User function', function() {
      it('Check the values', function() {
          assert.equal(userOne.print(),"ID: 001, Username: Relvis, First Name: Relvis, Last Name: Buthello, Email: relvisyt37@gmail.com, Password: Password123, Phone: 123456789, User Status: Active")
  })
})