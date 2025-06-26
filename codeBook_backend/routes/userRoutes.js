const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { registerUser,registerAdmin, loginUser, logoutUser, getUserProfile, loginStatus } = require("../controllers/userController");



router.post("/registerUser", registerUser);
router.post("/login", loginUser);
router.post("/registerAdmin", registerAdmin);
router.get("/userProfile", protect,  getUserProfile);
router.get("/logout", logoutUser);
router.get("/loginStatus", loginStatus);


module.exports = router;
