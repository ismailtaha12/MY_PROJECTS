// routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/signin-signup.ejs", authController.renderSigninSignup);

router.post('/AddUsers', authController.signup);
router.post('/loginn', authController.login);
module.exports = router;
