const shoesData = require('../../data/shoes.json');

let cart = [];
let shoes = [...shoesData];
module.exports = {

    getAllShoeData: (req, res) => {
        res.status(200).send(shoes);
    },

    getCartItems: (req, res) => {
        res.status(200).send(cart);
    },

    addToCart: (req, res) => {
        cart.push(req.body);
        res.status(200).send(cart);
    },

    deleteShoe: (req, res) => {
        const id = req.params.id;
        const index = shoes.findIndex(shoe => shoe.id === id);
        if (index !== -1) {
            shoes.splice(index, 1);
            res.status(200).send(shoes);
        }},

    deleteCart: (req, res) => {
        cart = [];
        res.status(200).send(cart);
    }  
}