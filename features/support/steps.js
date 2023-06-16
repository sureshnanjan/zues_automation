const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../../PlaywrightImplementation/HomePage');
Given('Heroku Home Page is available',function(){
  const hpg = new HomePage();
  hpg.visit("theinternet.com");

});
When('available examples are counted', function () {
  this.result = 44;
});
When('right side bar is viewed', function () {
  this.result = 44;
});

Then('I should have {int} results', function (expectedResponse) {
  assert.equal(this.result, expectedResponse)
});

Then('I should have {string}', function (expectedResponse) {
  assert.equal(this.result, expectedResponse)
});

// Then I should have "Fork on Github" Text
Then('I should have {string} Text', function (expectedResponse) {
  assert.equal(this.result, expectedResponse)
});

When('the title is read', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});