const { Cart } = require('../model/model');

const CartController = {
    // add Cart
    addCart: async (req, res) => {
        try {
            const newCart = new Cart(req.body);
            const saveCart = await newCart.save();
            res.status(200).json(saveCart);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get all Cart
    getAllCart: async (req, res) => {
        try {
            const carts = await Cart.find();
            res.status(200).json(carts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //get an Cart
    getAnCart: async (req, res) => {
        try {
            const cart = await Cart.findById(req.params.id);
            res.status(200).json(cart);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //update Cart
    updateCart: async (req, res) => {
        try {
            const updateCart = await Cart.findById(req.params.id);
            await updateCart.updateOne({ $set: req.body });
            res.status(200).json('Update Successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //delete Cart
    deleteCart: async (req, res) => {
        try {
            await Cart.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete Successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = CartController;
