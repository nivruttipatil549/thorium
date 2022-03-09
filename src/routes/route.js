

const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const tokenauth= require("../Middleware/Auth")


router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)
router.get("/users/:userId", tokenauth.auth, userController.getUserData)
router.put("/users/:userId", tokenauth.auth, userController.updateUser)
router.delete("/users/:userId", tokenauth.auth, userController.deleteUser)

module.exports = router;