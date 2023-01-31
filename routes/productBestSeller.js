const productBestSellerController = require('../controllers/productBestSellerController');

const router = require('express').Router();

// add productBestSeller

router.post('/', productBestSellerController.addproductBestSeller);
// get all productBestSeller

router.get('/', productBestSellerController.getAllproductBestSeller);
// get an productBestSeller

router.get('/:id', productBestSellerController.getAnproductBestSeller);
// update productBestSeller

router.put('/:id', productBestSellerController.updateproductBestSeller);
// delete productBestSeller

router.delete('/:id', productBestSellerController.deleteproductBestSeller);

module.exports = router;
