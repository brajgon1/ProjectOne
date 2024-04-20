const express = require('express')
const cors = require('cors');
const axios = require('axios')
const app = express()
const { getAllShoeData, addToCart, getCartItems, deleteShoe, deleteCart } = require("./controllers/shoeController")

app.use(cors());
app.use(express.json())

app.get("/api/shoes", getAllShoeData)
app.post("/api/cart", addToCart) 
app.get("/api/cart", getCartItems) 
app.delete("/api/shoes/:id", deleteShoe)
app.delete("/api/cart", deleteCart)

app.listen(4000, () => console.log("Server running on 4000"));