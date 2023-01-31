const customerController = require('../controllers/customerController');

const router = require('express').Router();

// add customer

router.post('/', customerController.addCustomer);

//get all customer

router.get('/', customerController.getAllCustomer);

// delete customer

router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
