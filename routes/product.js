const productController = require('../controllers/productController');

const router = require('express').Router();

// add product

router.post('/', productController.addProduct);
// get all product

router.get('/', productController.getAllProduct);

// get an product

router.get('/:id', productController.getAnProduct);

// get brand product
router.get('/:brand', productController.getBrandProduct);
// update product

router.put('/:id', productController.updateProduct);
// delete product

router.delete('/:id', productController.deleteProduct);

module.exports = router;
