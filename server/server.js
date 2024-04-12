const express = require('express')
const cors = require('cors');
const app = express()
const { getAllShoeData, addToCart, getCartItems, deleteShoe } = require("./controllers/shoeController")

app.use(cors());
app.use(express.json())

app.get("/api/shoes", getAllShoeData)
app.post("/api/cart", addToCart) 
app.get("/api/cart", getCartItems) 
app.delete("/api/shoes/:id", deleteShoe)

app.listen(4000, () => console.log("Server running on 4000"));