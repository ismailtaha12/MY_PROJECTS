// routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/signin-signup.ejs", authController.renderSigninSignup);

router.post('/signup', authController.signup);
router.post('/loginn', authController.login);
router.get('/admin/signout',authController.Logout);

module.exports = router;
