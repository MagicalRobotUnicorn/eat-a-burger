var express = require("express");
var handlebars = require("express-handlebars");

var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({}));
app.use(express.json());
app.use(express.static("./app/public"));

app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function(){
  console.log("Server listening on PORT: " + PORT);
});
