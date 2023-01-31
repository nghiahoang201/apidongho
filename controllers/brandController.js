const { Brand } = require('../model/model');

const BrandController = {
    // add brand
    addBrand: async (req, res) => {
        try {
            const newBrand = new Brand(req.body);
            const saveBrand = await newBrand.save();
            res.status(200).json(saveBrand);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get all brand
    getAllBrand: async (req, res) => {
        try {
            const brands = await Brand.find();
            res.status(200).json(brands);
        } catch (err) {
            req.status(500).json(err);
        }
    },
    // get an brand
    getAnBrand: async (req, res) => {
        try {
            const brand = await Brand.findById(req.params.id);
            res.status(200).json(brand);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update brand
    updateBrand: async (req, res) => {
        try {
            const updateBrand = await Brand.findById(req.params.id);
            await updateBrand.updateOne({ $set: req.body });
            res.status(200).json('Update Saccessfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete brand
    deleteBrand: async (req, res) => {
        try {
            await Brand.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete Saccessfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = BrandController;
