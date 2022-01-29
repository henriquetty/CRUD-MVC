const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");
const userController = require("../controllers/userController");

router.get("/", indexController.get);

router.get("/adduser", userController.renderPage);
router.post("/adduser", userController.addUser);

router.post("/edituser", (req, res) => res.json({ "status": "ok", "link" : "https://youtu.be/ohSNeQ70VsY"}));
router.post("/deleteuser", userController.deleteUser);

module.exports = router;
