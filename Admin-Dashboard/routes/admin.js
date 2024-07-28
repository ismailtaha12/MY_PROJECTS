// routes/admin.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const midlewares = require('../Middleware/middlewares')


router.get("/user.ejs",midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.renderUser);
router.get("/plan.ejs",midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.renderPlan);
router.get("/signout.ejs",midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.renderSignout);


router.get('/AddUsers',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.renderAddUsers);
router.get('/EditUsers',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.renderEditUsers);
router.get('/DeleteUsers',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.renderDeleteUsers);

router.post('/AddUsers',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.createUser);
router.put('/EditUsers',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.editUser);
router.delete('/DeleteUsers',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.deleteUser);



router.get('/AddPlans',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.renderAddPlans);
router.get('/EditPlans',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.renderEditPlans);
router.get('/DeletePlans',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.renderDeletePlans);

router.post('/AddPlans',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.createPlan);
router.put('/EditPlans',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.editPlan);
router.delete('/DeletePlans',midlewares.verifyToken,midlewares.authPage(['Admin']), adminController.deletePlan);




module.exports = router;
