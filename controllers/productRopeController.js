const { productRope } = require('../model/model');

const productRopeController = {
    //add productRope
    addproductRope: async (req, res) => {
        try {
            const newproductRope = new productRope(req.body);
            const saveproductRope = await newproductRope.save();
            res.status(200).json(saveproductRope);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get all productRope
    getAllproductRope: async (req, res) => {
        try {
            const productRopes = await productRope.find();
            res.status(200).json(productRopes);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //get an productRope
    getAnproductRope: async (req, res) => {
        try {
            const productRope = await productRope.findById(req.params.id);
            res.status(200).json(productRope);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update productRope
    updateproductRope: async (req, res) => {
        try {
            const updateproductRope = await productRope.findById(req.params.id);
            await updateproductRope.updateOne({ $set: req.body });
            res.status(200).json('Update Successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete productRope
    deleteproductRope: async (req, res) => {
        try {
            await productRope.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete Successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = productRopeController;
