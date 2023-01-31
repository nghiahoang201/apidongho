const { AccessoryProduct } = require('../model/model');

const AccessoryProductController = {
    //add AccessoryProduct
    addAccessoryProduct: async (req, res) => {
        try {
            const newAccessoryProduct = new AccessoryProduct(req.body);
            const saveAccessoryProduct = await newAccessoryProduct.save();
            res.status(200).json(saveAccessoryProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //get all AccessoryProduct
    getAllAccessoryProduct: async (req, res) => {
        try {
            const AccessoryProducts = await AccessoryProduct.find();
            res.status(200).json(AccessoryProducts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //get an AccessoryProduct
    getAnAccessoryProduct: async (req, res) => {
        try {
            const AccessoryProduct = await AccessoryProduct.findById(req.params.id);
            res.status(200).json(AccessoryProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update AccessoryProduct
    updateAccessoryProduct: async (req, res) => {
        try {
            const updateAccessoryProduct = await AccessoryProduct.findById(req.params.id);
            await updateAccessoryProduct.updateOne({ $set: req.body });
            res.status(200).json('Update Successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete AccessoryProduct
    deleteAccessoryProduct: async (req, res) => {
        try {
            await AccessoryProduct.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete Successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = AccessoryProductController;
