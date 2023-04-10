/**
 * Category model
 *
 * @param {number} id - The ID of the category.
 * @param {string} name - The name of the category.
 * @constructor
 */
function Category(id, name) {
  this.id = id;
  this.name = name;
  /**
   * Prints the category ID and name.
   *
   * @returns {string} - The category ID and name.
   */
  this.print = function() {
    console.log(`${this.id} - ${this.name}`);
    return `${this.id} - ${this.name}`;
  };
}

/**
* Tag model
*
* @param {number} id - The ID of the tag.
* @param {string} name - The name of the tag.
* @constructor
*/
function Tag(id, name) {
  this.id = id;
  this.name = name;
  /**
   * Prints the tag ID and name.
   * @returns {string} - The tag ID and name.
  */
  this.print = function() {
    console.log(`${this.id} - ${this.name}`);
    return `${this.id} - ${this.name}`;
  };
}

/**
* Pet model
*
* @param {number} id - The ID of the pet.
* @param {Category} category - The category of the pet.
* @param {string} name - The name of the pet.
* @param {string[]} photoUrls - The URLs of the pet's photos.
* @param {Tag[]} tags - The tags of the pet.
* @param {string} status - The status of the pet.
* @constructor
*/
function Pet(id, category, name, photoUrls, tags, status) {
  this.id = id;
  this.category = category;
  this.name = name;
  this.photoUrls = photoUrls;
  this.tags = tags;
  this.status = status;
  /**
   * Prints the pet ID, name, category, photo URLs, tags, and status.
   *
   * @returns {string} - The pet ID, name, category, photo URLs, tags, and status.
   */
  this.print = function() {
  let output = '';
  output += `ID: ${this.id}\n`;
  output += `Name: ${this.name}\n`;
  output += `Category: ${this.category.id} - ${this.category.name}\n`;
  output += `Photo URLs: ${this.photoUrls.join(", ")}\n`;
  output += 'Tags:\n';
  for (const tag of this.tags) {
      output += `  ${tag.id} - ${tag.name}\n`;
  }
  output += `Status: ${this.status}\n`;
  console.log(output)
  return output;
  };
  }

/**
* User model
*
* @param {number} id - The ID of the user.
* @param {string} username - The username of the user.
* @param {string} firstName - The first name of the user.
* @param {string} lastName - The last name of the user.
* @param {string} email - The email of the user.
* @param {string} password - The password of the user.
* @param {string} phone - The phone number of the user.
* @param {number} userStatus - The status of the user.
* @constructor
*/
function User(id, username, firstName, lastName, email, password, phone, userStatus) {
  this.id = id;
  this.username = username;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.phone = phone;
  /**
   * Prints the username, name, email, and phone number of the user.
   *
   * @returns {string} - The username, name, email, and phone number of the user.
   */
  this.print = function() {
      let output = '';
    output += `Username: ${this.username}\n`;
    output += `Name: ${this.firstName} ${this.lastName}\n`;
    output += `Email: ${this.email}\n`;
    output += `Phone: ${this.phone}\n`;
    console.log(output);
    return output;
  };
}

/**
* Order model
*
* @param {number} id - The ID of the order.
* @param {Pet} pet - The pet of the order.
* @param {number} quantity - The quantity of pets in the order.
* @param {string} shipDate - The date the order was shipped.
* @param {string} status - The status of the order.
* @param {boolean} complete - Whether the order is complete or not.
* @constructor
*/
function Order(id, pet, quantity, shipDate, status, complete) {
  this.id = id;
  this.pet = pet;
  this.quantity = quantity;
  this.shipDate = new Date(shipDate);
  this.status = status;
  this.complete = complete;
  /**
   * Prints the order ID, pet ID, pet name, quantity, ship date, status, and completeness.
   *
   * @returns {string} - The order ID, pet ID, pet name, quantity, ship date, status, and completeness.
   */
  this.print = function() {
      let output = '';
    output += `ID: ${this.id}\n`
    output += `Pet ID: ${this.pet.id}\n`
    output += `Pet Name: ${this.pet.name}\n`
    output += `Quantity: ${this.quantity}\n`
    output += `Ship Date: ${this.shipDate}\n`
    output += `Status: ${this.status}\n`
    output += `Complete: ${this.complete}\n`
    console.log(output);
    return output;
  };
}

/**
Creates instances of Category model with ID and name.
@param {number} id - The ID of the category.
@param {string} name - The name of the category.
*/
const categories = [
  new Category(1, 'Dogs'),
  new Category(2, 'Cats'),
  new Category(3, 'Fish'),
  new Category(4, 'Reptiles'),
  new Category(5, 'Birds')
];

/**
Creates instances of Tag model with ID and name.
@param {number} id - The ID of the category.
@param {string} name - The name of the category.
*/
const tags = [
  new Tag(1, 'Lazy'),
  new Tag(2, 'Fiesty'),
  new Tag(3, 'Bored'),
  new Tag(4, 'Loud'),
  new Tag(5, 'Playful')
];

  /**
  Creates instances of Pet model with ID, category, name, photo URLs, tags and status.
  @param {number} id - The ID of the pet.
  @param {Category} category - The category of the pet.
  @param {string} name - The name of the pet.
  @param {string[]} photoUrls - An array of URLs to photos of the pet.
  @param {Tag[]} tags - An array of tags associated with the pet.
  @param {string} status - The status of the pet.
  */
const pets = [
  new Pet(1, categories[0], 'Buddy', ['http://example.com/buddy.jpg'], [tags[0],tags[1]], 'available'),
  new Pet(2, categories[1], 'Mittens', ['http://example.com/mittens.jpg'], [tags[3],tags[4],tags[1]], 'sold')
];

/**
  Creates instances of User model with ID, username, first name, last name, email, password, and phone number.
  @class
  @param {number} id - The ID of the user.
  @param {string} username - The username of the user.
  @param {string} firstName - The first name of the user.
  @param {string} lastName - The last name of the user.
  @param {string} email - The email of the user.
  @param {string} password - The password of the user.
  @param {string} phone - The phone number of the user.
  */
const users = [
  new User(1, 'john.doe', 'John', 'Doe', 'john.doe@example.com', 'password', '123-456-7890'),
  new User(2, 'jane.doe', 'Jane', 'Doe', 'jane.doe@example.com', 'password', '987-654-3210')
];

  /**
  Creates instances of Order model with ID, pet, quantity, ship date, status and complete flag.
  @param {number} id - The ID of the order.
  @param {Pet} pet - The pet associated with the order.
  @param {number} quantity - The quantity of pets in the order.
  @param {string} shipDate - The date the order was shipped.
  @param {string} status - The status of the order.
  @param {boolean} complete - The completion status of the order.
  */
const orders = [
  new Order(1, pets[0], 1, '2023-04-12', 'pending', false),
  new Order(2, pets[1], 2, '2023-05-14', 'approved', true)
];


  /** Invoke print method for all Category instances
   */
  console.log('Printing all Category instances:');
  for (const category of categories) {
  category.print();
  }
  console.log('-------')

  /** Invoke print method for all Tag instances
   */
  console.log('Printing all Tag instances:');
  for (const tag of tags) {
  tag.print();
  }
  console.log('-------')


  /** Invoke print method for all Pet instances
   */
  console.log('Printing all Pet instances:');
  for (const pet of pets) {
      console.log(`Pet #${pet.id}`)
  pet.print();
      console.log('-------')
  }

  /** Invoke print method for all User instances
  */
      console.log('Printing all User instances:');
  for (const user of users) {
      console.log(`User #${user.id}`)
  user.print();
      console.log('-------')
  }

  /** Invoke print method for all Order instances
  */
      console.log('Printing all Order instances:');
  for (const order of orders) {
      console.log(`Order #${order.id}`)
  order.print();
      console.log('-------')
  }


/**

  Assert module to check the expected output and actual output.
  @const assert
*/

const assert = require('assert');

/**
* Function to check if category instance is printed properly
*/

describe('Category', function() {
it('should print category ID and name', function() {
  const category = new Category(1, 'Dogs');
  const expectedOutput = '1 - Dogs';
  assert.strictEqual(category.print(), expectedOutput);
});
});

/**
* Function to check if category tag is printed properly
*/

describe('Tag', function() {
  it('should print tag ID and name', function() {
    const tag = new Tag(1, 'Lazy');
    const expectedOutput = '1 - Lazy';
    assert.strictEqual(tag.print(), expectedOutput);
  });
});

/**
* Function to check if pet instance is printed properly
*/

describe('Pet', function() {
  it('should print pet details', function() {
    const category = new Category(1, 'Dogs');
    const tags = [new Tag(1, 'Lazy'), new Tag(2, 'Fiesty')];
    const pet = new Pet(1, category, 'Buddy', ['http://example.com/buddy.jpg'], tags, 'available');
    const expectedOutput = 'ID: 1\nName: Buddy\nCategory: 1 - Dogs\nPhoto URLs: http://example.com/buddy.jpg\nTags:\n  1 - Lazy\n  2 - Fiesty\nStatus: available\n';
    assert.strictEqual(pet.print(), expectedOutput);
  });
});

/**
* Function to check if user instance is printed properly
*/

describe('User', function() {
  it('should print user details', function() {
    const user = new User(1, 'john.doe', 'John', 'Doe', 'john.doe@example.com', 'password', '123-456-7890');
    const expectedOutput = 'Username: john.doe\nName: John Doe\nEmail: john.doe@example.com\nPhone: 123-456-7890\n';
    assert.strictEqual(user.print(), expectedOutput);
  });
});

/**
* Function to check if order instance is printed properly
*/

describe('Order', function() {
  it('should print order details', function() {
    const category = new Category(1, 'Dogs');
    const pet = new Pet(1, category, 'Buddy', ['http://example.com/buddy.jpg'], [], 'available');
    const order = new Order(1, pet, 1, '2023-04-12', 'pending', false);
    const expectedOutput = 'ID: 1\nPet ID: 1\nPet Name: Buddy\nQuantity: 1\nShip Date: Wed Apr 12 2023 05:30:00 GMT+0530 (India Standard Time)\nStatus: pending\nComplete: false\n';
    assert.strictEqual(order.print(), expectedOutput);
  });
});