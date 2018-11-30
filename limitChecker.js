var github = require('octonode');

var client = github.client();
var fs = require('fs');

client.limit(function (err, left, max, reset) {
console.log(left);
console.log(max);
console.log(reset); //(UTC epoch seconds)
});
