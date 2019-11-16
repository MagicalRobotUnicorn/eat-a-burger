var orm = require('../config/orm');

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb){
    orm.eat("burgers", objColVals, condition, function(res){
      cb(res);
    });
  },
  insertOne: function(){
    orm.create("burgers", cols, vals, function(res){
      cb(res);
    });
  },
  deleteOne: function(table, condition, cb){
    orm.delete("burgers", condition, function(){
      cb(res);
    });
  }
};

module.exports = burger;