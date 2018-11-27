var github = require('octonode');

var client = github.client();
var fs = require('fs');

//pcottle
client.get('/users/pcottle', {}, function (err, status, body, headers) {
  console.log(body);
  fs.writeFile("./jsondata/pcottle.json", JSON.stringify(body), (error) => {
      if (error) {
          console.error(err);
          return;
      };
      console.log("pcottle JSON file\n");
  });
});

//repo
client.get('/repos/pcottle/learnGitBranching', {}, function (err, status, body, headers) {
  console.log(body);
  fs.writeFile("./jsondata/learnGitBranching.json", JSON.stringify(body), (error) => {
      if (error) {
          console.error(err);
          return;
      };
      console.log("learnGitBranching to JSON file\n");
  });
});

//commits
client.get('/repos/pcottle/learnGitBranching/commits', {}, function (err, status, body, headers) {
  console.log(body);
  fs.writeFile("./jsondata/commits.json", JSON.stringify(body), (error) => {
      if (error) {
          console.error(err);
          return;
      };
      console.log("commits to JSON file\n");
  });
});

//contributors
client.get('/repos/pcottle/learnGitBranching/contributors', {}, function (err, status, body, headers) {
  console.log(body);
  fs.writeFile("./jsondata/contributors.json", JSON.stringify(body), (error) => {
      if (error) {
          console.error(err);
          return;
      };
      console.log("contributors to JSON file\n");
  });
});
