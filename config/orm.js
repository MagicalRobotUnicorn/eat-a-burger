var db = require("./connection");


var orm = {
  eat: function(tableInput, cb) {
    db.query(`UPDATE burgers set ? where ?`, [
      {
        devoured: true
      },
      {
        burger_id: burgerId
      }
    ], function(error, result){
      if (error){console.log("Error");}
      console.log(result);
    });
  },
  create: function(table, cols, vals, cb){
    var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES ${vals.length * '?'}`;

    db.query(queryString, vals, function(err, result){
      if (err){
        throw err;
      }

      cb(result);
    });
  }
}

async function executeQuery(sql) {
  var promise1 = new Promise(function (resolve, reject) {
    db.query(sql, function (err, result) {
      if (err) {
        reject(err)
      }
      resolve(result);
    })
  });
  return promise1;
}

async function eatThisBurger(burgerId){
  db.query(`UPDATE burgers set ? where ?`, [
    {
      devoured: true
    },
    {
      burger_id: burgerId
    }
  ], function(error, result){
    if (error){console.log("Error");}
    console.log(result);
  });
}

// async function retrieveAllWholeBurgers(){
//   db.query('Select * from burgers', function(error, result){
//     var returnArray = []
    
//     for (var i = 0; i < result.length; i++){
//       if (result[i].devoured === false){
//         returnArray.push(result[i]);
//       }
//     }
//     return returnArray;
//   });
// }

// async function retrieveAllEatenBurgers(){
//   db.query('Select * from burgers', function(error, result){
//     var returnArray = []
//     for (var i = 0; i < result.length; i++){
//       if (result[i].devoured === true){
//         returnArray.push(result[i]);
//       }
//     }
//     return returnArray;
//   });
}