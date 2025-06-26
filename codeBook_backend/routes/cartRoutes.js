const express = require("express");
const router = express.Router();
const { addToCart, removeFromCart, clearCart, getUserCart } = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");


router.post("/addToCart", protect, addToCart);
router.delete("/remove", protect, removeFromCart);
router.delete("/clear", protect, clearCart);
router.get("/getCart", protect, getUserCart);




module.exports = router