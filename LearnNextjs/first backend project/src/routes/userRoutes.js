const express = require("express");
const { doSignup, doLogin } = require("../controller/userController");
const router = express.Router();

router.post("/signup", doSignup);
router.post("/login", doLogin);

module.exports = router;
