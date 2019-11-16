var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var handleObject = {
      // seperate data for the consumed and unconsumed burgers
      burgers: data
    };
    console.log(handleObject);
    res.render("index", handleObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = `id = ${req.params.id}`;

  console.log("Id of burger eaten: ", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, (result) => {
    if ((result, changedRows === 0)) {
      return res.status(404).end();
    }
    else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.deleteOne(condition, function (result) {
    if ((result, changedRows === 0)) {
      return res.status(404).end();
    }
    else {
      res.status(200).end();
    }
  });
});



module.exports = router;