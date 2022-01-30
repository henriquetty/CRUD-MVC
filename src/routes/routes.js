const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");
const addUserController = require("../controllers/addUserController");
const editUserController = require("../controllers/editUserController");
const deleteUserController = require("../controllers/deleteUserController");

//index
router.get("/", indexController.renderPage);

//add user
router.get("/adduser", addUserController.renderPage);
router.post("/adduser", addUserController.addUser);

//edit user
router.get("/edit", editUserController.renderPage);
router.post("/edituser", (req, res) => {res.json( {"status": "not yet working"} )});

//delete user
router.post("/deleteuser", deleteUserController.deleteUser);

module.exports = router;
