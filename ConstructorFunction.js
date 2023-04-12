function Constructor1(id, name) {
    this.id = id;
    this.name = name;
    this.print = function c1 () {
        console.log(`${this.id} - ${this.name}`);
    }
}

var category1 = new Constructor1(1, 'Fish');
let category2 = new Constructor1(2, 'Dogs');
let category3 = new Constructor1(3, 'Birds');

console.log(category1.id);
console.log(category2.name);
category3.print();
console.log(category3);

var assert = require('assert');
describe('Unit testing:', function () {
    describe('Test to verify ApiResponse function', function() {
        it('Checking for the values inserted', function () {
            assert.equal(category1.id, 1);
    });
});
});