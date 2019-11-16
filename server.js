var express = require("express");
var handlebars = require("express-handlebars");
var path = require('path');

var mysql = require("mysql");

const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({}));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.engine("handlebars", handlebars({
  defaultLayout: "main",
  partialsDir: `${__dirname}/views/partials`
}));

app.set('views', path.join(__dirname, 'views'));

app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function(){
  console.log("Server listening on PORT: " + PORT);
});
