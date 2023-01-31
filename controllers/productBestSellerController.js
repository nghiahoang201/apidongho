const { ProductBestSellers } = require('../model/model');

const productBestSellerController = {
    //add addproductBestSeller
    addproductBestSeller: async (req, res) => {
        try {
            const newproductBestSeller = new ProductBestSellers(req.body);
            const saveproductBestSeller = await newproductBestSeller.save();
            res.status(200).json(saveproductBestSeller);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get all productBestSeller
    getAllproductBestSeller: async (req, res) => {
        try {
            const productBestSellers = await ProductBestSellers.find();
            res.status(200).json(productBestSellers);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get an productBestSeller
    getAnproductBestSeller: async (req, res) => {
        try {
            const productBestSeller = await ProductBestSellers.findById(req.params.id);
            res.status(200).json(productBestSeller);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update productBestSeller
    updateproductBestSeller: async (req, res) => {
        try {
            const updateproductBestSeller = await ProductBestSellers.findById(req.params.id);
            await updateproductBestSeller.updateOne({ $set: req.body });
            res.status(200).json('Update Successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete productBestSeller
    deleteproductBestSeller: async (req, res) => {
        try {
            await ProductBestSellers.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete Successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = productBestSellerController;
