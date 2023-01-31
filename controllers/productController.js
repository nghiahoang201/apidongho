const { Product } = require('../model/model');

const productController = {
    // add product
    addProduct: async (req, res) => {
        try {
            const newProduct = new Product(req.body);
            const saveProduct = await newProduct.save();
            res.status(200).json(saveProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get all product
    getAllProduct: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get brand product
    getBrandProduct: async (req, res) => {
        try {
            const products = await Product.find();
            const brand = req.params.brand;
            const arrayProductByBrand = products.filter((item) => item.brand === brand);
            res.status(200).json(arrayProductByBrand);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get an product
    getAnProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update product
    updateProduct: async (req, res) => {
        try {
            const updateProduct = await Product.findById(req.params.id);
            await updateProduct.updateOne({ $set: req.body });
            res.status(200).json('Update Successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete product
    deleteProduct: async (req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete Successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = productController;
