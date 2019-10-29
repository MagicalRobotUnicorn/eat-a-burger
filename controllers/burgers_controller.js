var express = require("express");
var router = express.Router();
var orm = require("../models/burger.js");

router.get("/", function(req, res){
  burger.all(function(data){
    var handleObject = {
      // seperate data for the consumed and unconsumed burgers
      devouredBurgers : data.devoured,
      wholeBurgers : data.whole
    };
    console.log(burgerObject);
    res.render("index", handleObject);
  });
});

router.post("/api/burgers",  function(req, res){
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result){
    res.json ( { id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = `id = ${req.params.id}`;

  console.log("Id of burger eaten: ", condition);

  burger.update({
    devoured: true
  }, condition, (result) => {
    
  });
});
