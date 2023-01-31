const { Customer } = require('../model/model');

const customerController = {
    // add customer
    addCustomer: async (req, res) => {
        try {
            const newCustomer = new Customer(req.body);
            const saveCustomer = await newCustomer.save();
            res.status(200).json(saveCustomer);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get all customer

    getAllCustomer: async (req, res) => {
        try {
            const getCustomer = await Customer.find();
            res.status(200).json(getCustomer);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete customer

    deleteCustomer: async (req, res) => {
        try {
            await Customer.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete Successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = customerController;
