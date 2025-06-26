const mongoose = require("mongoose")

const eBookSchema = new mongoose.Schema({

    id: {
        type:String,
        required:true
    },

    name: {
        type:String,
        required:true
    },

    overview: {
        type:String
    },

    long_description: {
        type:String
    },

    price: {
        type:Number
    },

    poster: {
        type:String
    },


    rating: {
        type:Number
    },

    inStock: {
        type:Boolean,
        default: true
    },

    size: {
        type:Number
    },

    bestSeller: {
        type:Boolean,
        default: false
    }

})

module.exports = mongoose.model("Ebook", eBookSchema)