var github = require('octonode');

var client = github.client();
var fs = require('fs');

// minimaxir - big-list-of-naughty-strings - contributors
client.get('/repos/minimaxir/big-list-of-naughty-strings/contributors', {},
function (err, status, body, headers) {
  fs.appendFileSync('./relevantinfo/wagoodman-contributors',
    "login,contributions\n");
  for(var x in body) {
    if(body.hasOwnProperty(x))
      fs.appendFileSync('./relevantinfo/wagoodman-contributors', body[x].login
        + "," + body[x].contributions + "\n");
  }
  //console.log(body);
});


// wagoodman - dive - contributors
client.get('/repos/wagoodman/dive/contributors', {}, function (err, status,
  body, headers) {
  fs.appendFileSync('./relevantinfo/wagoodman-contributors',
    "login,contributions\n");
  for(var x in body) {
    if(body.hasOwnProperty(x))
      fs.appendFileSync('./relevantinfo/wagoodman-contributors', body[x].login
        + "," + body[x].contributions + "\n");
  }
  //console.log(body);
});

// pcottle - learnGitBranching - contributors
client.get('/repos/pcottle/learnGitBranching/contributors', {}, function (err,
  status, body, headers) {
  fs.appendFileSync('./relevantinfo/pcottle-contributors',
    "login,contributions\n");
  for(var x in body) {
    if(body.hasOwnProperty(x))
      fs.appendFileSync('./relevantinfo/pcottle-contributors', body[x].login
        + "," + body[x].contributions + "\n");
  }
  //console.log(body);
});
