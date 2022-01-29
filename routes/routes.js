const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");
const userController = require("../controllers/userController");

router.get("/", indexController.get);

router.get("/adduser", userController.get);
router.post("/adduser", userController.post);

module.exports = router;
