/**
 * Base object to print data from all models
 * @typedef {Object} PrintBase
 * @property {function} print - Prints out all properties of the model
 */
const PrintBase = {
  print: function() {
    console.log(`#${this.id}: `, this);
    console.log("--------")
  }
};

/**
 * Category model object
 * @typedef {Object} Category
 * @extends PrintBase
 */
const Category = Object.create(PrintBase);

/**
 * Tag model object
 * @typedef {Object} Tag
 * @extends PrintBase
 */
const Tag = Object.create(PrintBase);

/**
 * Pet model object
 * @typedef {Object} Pet
 * @extends PrintBase
 */
const Pet = Object.create(PrintBase);

/**
 * User model object
 * @typedef {Object} User
 * @extends PrintBase
 */
const User = Object.create(PrintBase);

/**
 * Order model object
 * @typedef {Object} Order
 * @extends PrintBase
 */
const Order = Object.create(PrintBase);

// Create object instances of each model into separate arrays

/**
 * An array that holds instances of the Category model object.
 * @type {Category[]}
 */

const categories = [
  { id: 1, name: "Dogs", __proto__: Category.prototype },
  { id: 2, name: "Cats", __proto__: Category.prototype },
  { id: 3, name: "Birds", __proto__: Category.prototype }
];

/**
 * An array that holds instances of the Tag model object.
 * @type {Tag[]}
 */

const tags = [
  { id: 1, name: "Friendly", __proto__: Tag.prototype },
  { id: 2, name: "Lazy", __proto__: Tag.prototype },
  { id: 3, name: "Loud", __proto__: Tag.prototype }
];

/**
 * An array that holds instances of the Pet model object.
 * @type {Pet[]}
 */

const pets = [
  {
    id: 1,
    name: "Doggo",
    category: categories[0],
    tags: tags[0],
    status: "available",
    __proto__: Pet.prototype
  },
  {
    id: 2,
    name: "Catto",
    category: categories[1],
    tags: tags[1],
    status: "sold",
    __proto__: Pet.prototype
  },
  {
    id: 3,
    name: "Birdo",
    category: categories[2],
    tags: tags[2],
    status: "pending",
    __proto__: Pet.prototype
  }
];
/**
 * An array that holds instances of the User model object.
 * @type {User[]}
 */
const users = [
  {
    id: 1,
    username: "johndoe",
    email: "johndoe@example.com",
    firstName: "John",
    lastName: "Doe",
    phone: "123-456-7890",
    userStatus: 1,
    __proto__: User.prototype
  },
  {
    id: 2,
    username: "janedoe",
    email: "janedoe@example.com",
    firstName: "Jane",
    lastName: "Doe",
    phone: "123-456-7890",
    userStatus: 2,
    __proto__: User.prototype
  }
];
/**
 * An array that holds instances of the Order model object.
 * @type {Order[]}
 */
const orders = [
  {
    id: 1,
    pet: pets[0],
    quantity: 1,
    shipDate: new Date(),
    status: "placed",
    complete: false,
    __proto__: Order.prototype
  },
  {
    id: 2,
    pet: pets[1],
    quantity: 2,
    shipDate: new Date(),
    status: "delivered",
    complete: true,
    __proto__: Order.prototype
  }
];

/**
 * Prints the length of an array if it is an array.
 * @function
 * @param {Array} attribute - The array to print the length of.
 * @returns {string} - A string that indicates the length of the array.
 **/
function println(attribute) {
  if (Array.isArray(attribute)) {
    return `Total: ${attribute.length}`;
  }
}

/**
 * Run the print function for all instances of each model object and print the total number of instances.
 */
console.log(`CATEGORIES | ${println(categories)}`);
  for (const category of categories) {
    Category.print(category)
  }
  console.log(`PETS | Total: ${pets.length}`);
  for (const pet of pets) {
    Pet.print.call(pet)  
  }
  console.log(`TAGS | Total: ${tags.length}`);
  for (const tag of tags) {
    Tag.print.call(tag)
  }
  console.log(`USERS | Total: ${users.length}`);
  for (const user of users) {
    User.print.call(user)
  }
  console.log(`ORDERS | Total: ${orders.length}`);
  for (const order of orders) {
    Order.print.call(order)
  }


/**
 * Asserts that the number of objects in each array is printed correctly.
  */

  var assert = require('assert');
  const { it } = require('mocha');
  describe('Testing number of objects for each array', function () {
    it('Check if the number of Categories is printed correctly', function () {
      assert.equal(println(categories), 'Total: 3');
    });
    it('Check if the number of Pets is printed correctly', function () {
      assert.equal(println(pets), 'Total: 3');
    });
    it('Check if the number of Tags is printed correctly', function () {
      assert.equal(println(tags), 'Total: 3');
    });
    it('Check if the number of Users is printed correctly', function () {
      assert.equal(println(users), 'Total: 2');
    });
    it('Check if the number of Orders is printed correctly', function () {
      assert.equal(println(orders), 'Total: 2');
    });
  });
