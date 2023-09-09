const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getMe,
} = require("../controllers/userController");
const {protect} = require("../middleware/authMiddleware")

// for encrypting password npm i bcryptjs
// npm install jsonwebtoken
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
