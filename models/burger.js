var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Routes for all burgers or routes for burger and finished burger
// Route for all in get for
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

router.post("/api/burgers",  function(req, res){\
  burger.create([

  ], function(result){

  });
});