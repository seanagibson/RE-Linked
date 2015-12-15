// var request = require('request');
var _ = require('underscore');
var db = require('./data.js');


exports.login = function(req, res){
  var user = req.body.email;
  var password = req.body.password;

  var userInfo = undefined;

  _.each(db, function(dbUser){
    if(dbUser.email === user && dbUser.password === password){
      userInfo = dbUser;
    }
  });
  
  if(userInfo !== undefined){
    res.status(200);
    res.json(userInfo);
    res.end();
  } else {
    res.status(500);
  }

};

exports.signup = function(req, res){
  res.end('ok');
};

exports.getProfile = function(req, res){
  res.end('ok');
};

exports.setProfile = function(req, res){
  res.end('ok');
};

exports.getUsers = function(req, res){
  res.set('Content-Type', 'text/html');
  res.status(200);
  res.send(JSON.stringify(db));
  res.end();
};
