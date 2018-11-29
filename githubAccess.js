var github = require('octonode');

var client = github.client();
var fs = require('fs');

// ORGANISATION vuejs - vue
client.get('repos/vuejs/jp.vuejs.org/contributors', {},
function (err, status, body, headers) {
  fs.appendFileSync('./relevantinfo/vue-contributors.txt',"");
  for(var x in body) {
    if(body.hasOwnProperty(x))
      fs.appendFileSync('./relevantinfo/vue-contributors.txt',
      "{\"login\":\"" + body[x].login + ",\"contributions\":"
      +  body[x].contributions + "\"},\n");
  }
  //console.log(body);
});

// ORGANISATION adobe - brackets-app
client.get('/repos/adobe/brackets-app/contributors', {},
function (err, status, body, headers) {
  fs.appendFileSync('./relevantinfo/adobe-contributors.txt',"");
  for(var x in body) {
    if(body.hasOwnProperty(x))
      fs.appendFileSync('./relevantinfo/adobe-contributors.txt',
      "{\"login\":\"" + body[x].login + ",\"contributions\":"
      +  body[x].contributions + "\"},\n");
  }
  //console.log(body);
});

//ORGANISATION firecracker-microvm/firecracker
client.get('/repos/firecracker-microvm/firecracker/contributors', {},
function (err, status, body, headers) {
  fs.appendFileSync('./relevantinfo/firecracker-contributors.txt',"");
  for(var x in body) {
    if(body.hasOwnProperty(x))
      fs.appendFileSync('./relevantinfo/firecracker-contributors.txt',
      "{\"login\":\"" + body[x].login + ",\"contributions\":"
      +  body[x].contributions + "\"},\n");
  }
  //console.log(body);
});


// USER minimaxir - big-list-of-naughty-strings
client.get('/repos/minimaxir/big-list-of-naughty-strings/contributors', {},
function (err, status, body, headers) {
  fs.appendFileSync('./relevantinfo/minimaxir-contributors.txt',"");
  for(var x in body) {
    if(body.hasOwnProperty(x))
      fs.appendFileSync('./relevantinfo/minimaxir-contributors.txt',
      "{\"login\":\"" + body[x].login + ",\"contributions\":"
      +  body[x].contributions + "\"},\n");
  }
  //console.log(body);
});

// USER wagoodman - dive
client.get('/repos/wagoodman/dive/contributors', {}, function (err, status,
  body, headers) {
  fs.appendFileSync('./relevantinfo/wagoodman-contributors.txt',"");
  for(var x in body) {
    if(body.hasOwnProperty(x))
      fs.appendFileSync('./relevantinfo/wagoodman-contributors.txt',
      "{\"login\":\"" + body[x].login + ",\"contributions\":"
      +  body[x].contributions + "\"},\n");
  }
  //console.log(body);
});

// USER pcottle - learnGitBranching
client.get('/repos/pcottle/learnGitBranching/contributors', {}, function (err,
  status, body, headers) {
  fs.appendFileSync('./relevantinfo/pcottle-contributors.txt',"");
  for(var x in body) {
    if(body.hasOwnProperty(x))
      fs.appendFileSync('./relevantinfo/pcottle-contributors.txt',
      "{\"login\":\"" + body[x].login + ",\"contributions\":"
      +  body[x].contributions + "\"},\n");
  }
  //console.log(body);
});
