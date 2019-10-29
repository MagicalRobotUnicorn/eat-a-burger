var orm = require('../config/orm');

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res){
      cb(res);
    });
  },
  eat: function(){
    orm.eat("burgers", function(res){
      cb(res);
    });
  },
  create: function(){
    orm.create("burgers", cols, vals, function(res){
      cb(res);
    });
  },
  delete: function(condition, cb){
    orm.delete("burgers", condition, function(){
      cb(res);
    });
  }
};

module.exports = burger;