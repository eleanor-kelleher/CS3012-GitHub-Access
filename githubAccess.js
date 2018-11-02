var github = require('octonode');

var client = github.client();

client.get('/users/jameskhere', {}, function (err, status, body, headers) {
  console.log(body); //json object
});
