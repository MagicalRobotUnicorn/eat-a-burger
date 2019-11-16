var db = require("./connection");

function createQmarks(num){
  var arr = [];
  for (var i = 0; i < num; i++){
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
}

function worseSql(ob){
  for (var key in ob){
    var returnValue = key + "=" + ob[key];
  }

  return returnValue;
}

var orm = {
  selectAll: function(table, cb){
    var dbQuery = "SELECT * FROM " + table + ";";

    db.query(dbQuery, function(err, res){
      if (err){
        throw err;
      }
      cb(res);
    });
  },
  insertOne : function(table, cols, vals, cb){
    var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";
    console.log(dbQuery);
    db.query(dbQuery, vals, function(err, res){
      if (err){
        throw err;
      }
      cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb){
    console.log(objColVals);
    var dbQuery = "UPDATE " + table + " SET " + worseSql(objColVals) + " WHERE " + condition;
    console.log(dbQuery);
    db.query(dbQuery, function(err, res){
      if (err){
        throw err;
      }
      cb(res);
    });
  },
  deleteOne: function(table, condition, cb){
    var dbQuery = "DELETE FROM " + table + " WHERE " + condition;

    console.log(dbQuery);

    db.query(dbQuery, function(err, res){
      if (err){
        throw err;
      }
      cb(res);
    });
  }

}
module.exports = orm;

// var orm = {
//   all: function(tableInput, cb) {

//   },
//   eat: function(tableInput, cb) {
//     db.query(`UPDATE burgers set ? where ?`, [
//       {
//         devoured: true
//       },
//       {
//         burger_id: burgerId
//       }
//     ], function(error, result){
//       if (error){console.log("Error");}
//       console.log(result);
//     });
//   },
//   create: function(table, cols, vals, cb){
//     var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES ${vals.length * '?'}`;

//     db.query(queryString, vals, function(err, result){
//       if (err){
//         throw err;
//       }
//       cb(result);
//     });
//   }
// }

// async function executeQuery(sql) {
//   var promise1 = new Promise(function (resolve, reject) {
//     db.query(sql, function (err, result) {
//       if (err) {
//         reject(err)
//       }
//       resolve(result);
//     })
//   });
//   return promise1;
// }

// async function eatThisBurger(burgerId){
//   db.query(`UPDATE burgers set ? where ?`, [
//     {
//       devoured: true
//     },
//     {
//       burger_id: burgerId
//     }
//   ], function(error, result){
//     if (error){console.log("Error");}
//     console.log(result);
//   });
// }

// // async function retrieveAllWholeBurgers(){
// //   db.query('Select * from burgers', function(error, result){
// //     var returnArray = []
    
// //     for (var i = 0; i < result.length; i++){
// //       if (result[i].devoured === false){
// //         returnArray.push(result[i]);
// //       }
// //     }
// //     return returnArray;
// //   });
// // }

// // async function retrieveAllEatenBurgers(){
// //   db.query('Select * from burgers', function(error, result){
// //     var returnArray = []
// //     for (var i = 0; i < result.length; i++){
// //       if (result[i].devoured === true){
// //         returnArray.push(result[i]);
// //       }
// //     }
// //     return returnArray;
// //   });
