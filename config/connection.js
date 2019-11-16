var mysql = require("mysql");
var db;
if(process.env.JAWSDB_URL){
  db = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
db = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Pa$$w0rd",
  database: "burger_db"
});
}

db.connect(function(err) {
  if (err){
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

module.exports = db;