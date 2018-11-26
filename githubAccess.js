var github = require('octonode');

var client = github.client();
var fs = require('fs');

//pcottle
client.get('/users/pcottle', {}, function (err, status, body, headers) {
  //console.log(body);
  fs.writeFile("./pcottle.json", JSON.stringify(body), (error) => {
      if (error) {
          console.error(err);
          return;
      };
      console.log("\npcottle JSON file\n");
  });
});

//repo
client.get('/repos/pcottle/learnGitBranching', {}, function (err, status, body, headers) {
  //console.log(body);
  fs.writeFile("./learnGitBranching.json", JSON.stringify(body), (error) => {
      if (error) {
          console.error(err);
          return;
      };
      console.log("\nlearnGitBranching to JSON file\n");
  });
});

//commits
client.get('/repos/pcottle/learnGitBranching/commits', {}, function (err, status, body, headers) {
  //console.log(body);
  fs.writeFile("./commits.json", JSON.stringify(body), (error) => {
      if (error) {
          console.error(err);
          return;
      };
      console.log("\ncommits to JSON file\n");
  });
});

//contributors
client.get('/repos/pcottle/learnGitBranching/contributors', {}, function (err, status, body, headers) {
  //console.log(body);
  fs.writeFile("./contributors.json", JSON.stringify(body), (error) => {
      if (error) {
          console.error(err);
          return;
      };
      console.log("\ncontributors to JSON file\n");
  });
});
