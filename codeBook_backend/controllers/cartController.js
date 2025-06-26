
const Cart = require("../models/cartModel")
const asyncHandler = require("express-async-handler")
const Ebook = require("../models/ebookModel")

const addToCart = asyncHandler(async (req, res) => {
    const userId = req.user._id

    const { id } = req.body

    console.log(req.body)
        let cart = await Cart.findOne({ userId })
        const ebook = await Ebook.findOne({ id })
        if (!cart) {
            cart = new Cart({
                userId,
                cartlist: [ebook]
            })
        } else {
            const existingCart = cart.cartList.findIndex(
                item => item.id === id
            )
            if (existingCart !== -1) {
                res.status(400)
                throw new Error("Already added to cart")
            } else {
                cart.cartList.push(ebook)
            }
        }

        const savedCart = await cart.save();
        res.status(200).json(savedCart)

})

const removeFromCart = asyncHandler(async (req, res) => {
    const userId = req.user._id
    const { id } = req.body

    let cart = await Cart.findOne({ userId })
  

  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  const itemIndex = cart.cartList.findIndex(item => item.id === id);

  if (itemIndex === -1) {
    res.status(404);
    throw new Error('Item not found in cart');
  }

  cart.cartList.splice(itemIndex, 1); // Remove item from cart

  const updatedCart = await cart.save();
  res.status(200).json(updatedCart);
})

const clearCart = asyncHandler(async (req, res) => {
    const userId = req.user._id

    let cart = await Cart.findOne({ userId })

    if(!cart){
        res.status(404)
        throw new Error ("Cart not found")
    }

    cart.cartList = []
    const clearedCart = await cart.save()
    res.status(200).json(clearedCart)
})

const getUserCart = asyncHandler(async (req, res) => {
    const userId = req.user._id

    const cart = await Cart.findOne({userId})

    if(!cart){
        res.status(400)
        throw new Error("Cart not found")
    }
    res.status(200).json(cart)
})



module.exports = { addToCart, removeFromCart, clearCart, getUserCart }