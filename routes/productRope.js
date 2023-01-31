const productRopeController = require('../controllers/productRopeController');

const router = require('express').Router();

// add productRope

router.post('/', productRopeController.addproductRope);
// get all productRope

router.get('/', productRopeController.getAllproductRope);
// get an productRope

router.get('/:id', productRopeController.getAnproductRope);
// update productRope

router.put('/:id', productRopeController.updateproductRope);
// delete productRope

router.delete('/:id', productRopeController.deleteproductRope);

module.exports = router;
