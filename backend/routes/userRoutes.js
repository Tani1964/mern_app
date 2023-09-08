const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getMe,
} = require("../controllers/userController");

// for encrypting password npm i bcryptjs
// npm install jsonwebtoken
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe);

module.exports = router;
