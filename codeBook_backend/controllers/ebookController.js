const Ebook = require("../models/ebookModel")
const asyncHandler = require("express-async-handler")
const { generateUniqueId } = require("../utils")

// Create an Ebook

const createEbook = asyncHandler(async (req, res) => {
    const {name, overview, long_description, price, poster, rating, 
        inStock, bestSeller, size} = req.body

        const existing = await Ebook.findOne({name})
            if(existing){
                res.status(400)
                throw new Error("Ebook with this name already exists")
            }

    if(!name || !overview || !long_description || !price || !poster 
        || !rating || !size){
            res.status(400)
            throw new Error("All fields are required")
        }

    if(rating < 0 || rating > 5){
        res.status(400)
        throw new Error("Rating can only be between 1 - 5")
    }

    const id = await generateUniqueId()

    const ebook = new Ebook({
        id,
        name,
        overview,
        long_description,
        price,
        rating,
        poster,
        bestSeller: bestSeller || false,
        inStock: inStock || true,
        size
    })

    const savedEbook = await ebook.save();

    res.status(201).json(savedEbook)
})

// Update an Ebook
const updateEbook = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const {overview, long_description, price, poster, rating, 
        inStock, bestSeller} = req.body;

        try {
            const ebook = await Ebook.findOne({id});
            if (ebook){
                ebook.price = req.body.price || ebook.price;
                ebook.poster = req.body.poster || ebook.poster;
                ebook.overview = req.body.overview || ebook.overview;
                ebook.rating = req.body.rating || ebook.rating;
                ebook.in_stock = req.body.in_stock || ebook.in_stock;
                ebook.best_seller = req.body.best_seller || ebook.best_seller;
                ebook.long_description = req.body.long_description || ebook.long_description;

                const updatedEbook = await ebook.save();
                res.status(200).json(updatedEbook)
            }else {
                res.status(404).json({error: "Ebook not Found"})
            }
        } catch (error) {
            res.status(500).json({error: "Internal server error"})
        }

    
});

const getAllEbooks = asyncHandler(async (req, res) => {
    
        const ebooks = await Ebook.find();

        if(!ebooks){
            res.status(500)
            throw new Error("Something went wrong")
        }
        
    res.status(200).json(ebooks);
});

const getAnEbook = asyncHandler(async (req, res) => {
    const { id } = req.params;

        const ebook = await Ebook.findOne({id});
        if (ebook) {
            const { _id, id, name, overview, long_description, price, poster, rating,
                inStock, bestSeller, size } = ebook;

        res.status(200).json({ _id, id, name, overview, long_description, price, poster, rating,
                inStock, bestSeller, size});
        
        } else {
            res.status(400)
            throw new Error("Ebook not found")
        }
        
   
});


module.exports = {
    createEbook,
    updateEbook,
    getAllEbooks,
    getAnEbook
}
