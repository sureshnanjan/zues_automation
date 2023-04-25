function Category(id, name) {
    /**
     * Represents the category of pet
     * @constructor
     * @param {number} id The id of the category
     * @param {string} name The name of the category
     */
        this.id = id;
        this.name = name;
        this.printCategory = function () {
            console.log(`${this.name} - ${this.id}`);
            return(`${this.name} - ${this.id}`);
        };
    }

/**
 * Set of categories
 */
const Category = ['dogs','fish','birds','reptiles','cats'];

//Printing details of category
fish.print();
reptile.print();

/**
 * 
 * Moccha tests to verify category constructor function
 * will complete this tests code
 */
var assert = require('assert');
const{it, describe} = require('mocha');

// describe('Tests for category function', ()=> {
//     describe('Testing category constructor',()=>{
//         it('Category id should be')
//     })
// })

function Tag(id,name) {
    /**
     * Represents the tag
     * @constructor
     * @param {number} id The id of the Tag
     * @param {string} name The name of the Tag
     */
        this.id = id;
        this.name = name;
        this.print = function () {
            console.log(`${this.id} - ${this.name}`);
        };
    }

/**
 * set of tags
 */
const Tag = ['tag1', 'tag2', 'tag3'];

//printing tag details
tag1.print();
tag2.print();

function Pet(id, category, name, tag) {
    /**
     * Represents the Pet details
     * @constructor
     * @param {number} id The id of the Pet
     * @param {Category} category The Category to which pet belongs
     * @param {string} name The name of the Pet
     * @param {Array<Tag>} tag array of tags associated with pet
     */
        this.id = id;
        this.category = category;
        this.name = name;
        this.tag = tag;
        this.print = function () {
            console.log(`${this.id} - ${this.name}`);
            console.log(`Category: ${this.category.name}`);
            console.log(`Tags: ${this.tag.name}`);
        };
    }


/**
 * set of pets
 */
const pet1 = new Pet(1, fish, 'Nemo', tag1);
const pet2 = new Pet(2, reptile, 'Lizard', tag2);

//printing pet details
pet1.print();
pet2.print();

function User(id, username, firstname, lastname, email, password, phone, userStatus) {
    /**
     * Represent user
     * @constructor
     * @param {number} id This is id of user
     * @param {string} firstname This is firstname of user
     * @param {string} lastname The is the lastname of the user
     * @param {string} email The is the user email id
     * @param {string} password The is the password of user
     * @param {string} phone This is phone of user
     * @param {String} userStatus This is the status of user
     */

    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.userStatus = userStatus;
    this.print = function(){
        console.log(`${this.firstname} ${this.lastname} - ${this.username}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Status: ${this.userStatus}`);
    }
}

//Creating new user instance
const user1 = new User(1, 'ShubN', 'Shubham', 'Nigam', 'Shubh@xyz.com', '12121212', 0000000001, 1);
const user2 = new User(2, 'xyz', 'x','z','xyz@abc.com', 'password', 1234567890, 2);

//Print user detail
user1.print();
user2.print();