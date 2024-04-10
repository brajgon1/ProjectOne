const shoesData = require('../../data/shoes.json');
let cart = [];
module.exports = {

    getAllShoeData: (req, res) => {
        res.status(200).send(shoesData);
    },

    // getCartItemsCount: (req, res) => {
    //     res.status(200).send(cart.length);
    // },

    addToCart: (req, res) => {
        cart.push(req.body);
        res.status(200).send(cart);
    },



}