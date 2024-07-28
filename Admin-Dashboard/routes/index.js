// routes/index.js
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const midlewares = require('../Middleware/middlewares')
router.get("/", (req, res) => {
  res.render("signin-signup");
});

router.get("/homepage.html",midlewares.verifyToken, (req, res) => {
  res.render("homepage");
});

router.get("/index.html",midlewares.verifyToken,midlewares.authPage(['Admin']), orderController.getIndex);

module.exports = router;