const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin/loginController");

router.post("/login", adminController.login);
router.get("/protected", adminController.protectedRoute);

module.exports = router;
