const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors");
const corsOption = require("./config/corsOptions");

const userRoutes = require("./routes/userRoutes");
const ebookRoutes = require("./routes/ebookRoutes")
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes")
const cookieParser = require("cookie-parser");






dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser());
app.use(cors(corsOption));

app.use(express.urlencoded({ extended: true }))

app.use("/api/users", userRoutes);
app.use("/api/ebook", ebookRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected Successfully")

    app.listen(process.env.PORT, () => {
        console.log(`server running🏃 on port ${process.env.PORT}`)
    })
}).catch((err) => {
    console.error("Database connection failed😞", err);

    process.exit(1)
})
