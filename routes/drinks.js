const express = require("express");
const router = express.Router();
const drinksController = require("../controllers/drinks");

// IDUCES

router.get("/", drinksController.index);

router.delete("/:id", drinksController.del);

router.put("/:id", drinksController.update);

router.post("/", drinksController.create);

router.get("/:id", drinksController.show);


module.exports = router;
