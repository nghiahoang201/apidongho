const BrandController = require('../controllers/brandController');

const router = require('express').Router();

// add brand

router.post('/', BrandController.addBrand);
// get all brand

router.get('/', BrandController.getAllBrand);
// get an brand

router.get('/:id', BrandController.getAnBrand);
// update brand

router.put('/:id', BrandController.updateBrand);
// delete brand

router.delete('/:id', BrandController.deleteBrand);

module.exports = router;
