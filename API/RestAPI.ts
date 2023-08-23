var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://restful-booker.herokuapp.com/booking',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
