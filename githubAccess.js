var github = require('octonode');

var client = github.client();
var fs = require("fs");
var jsonData;

client.get('/users/fabpot', {}, function (err, status, body, headers) {
  console.log(body); //json object
  fs.writeFile("./data.json", JSON.stringify(body), (error) => {
      if (error) {
          console.error(err);
          return;
      };
      console.log("Saved to JSON file\n");
  });
});
