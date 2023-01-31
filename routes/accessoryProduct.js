const AccessoryProductController = require('../controllers/accessoryProductController');

const router = require('express').Router();

// add AccessoryProduct

router.post('/', AccessoryProductController.addAccessoryProduct);
// get all AccessoryProduct

router.get('/', AccessoryProductController.getAllAccessoryProduct);
// get an AccessoryProduct

router.get('/:id', AccessoryProductController.getAnAccessoryProduct);
// update AccessoryProduct

router.put('/:id', AccessoryProductController.updateAccessoryProduct);
// delete AccessoryProduct

router.delete('/:id', AccessoryProductController.deleteAccessoryProduct);

module.exports = router;
