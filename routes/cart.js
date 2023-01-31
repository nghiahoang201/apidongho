const cartController = require('../controllers/cartController');

const router = require('express').Router();

// add Cart

router.post('/', cartController.addCart);
// get all Cart

router.get('/', cartController.getAllCart);
// get an Cart

router.get('/:id', cartController.getAnCart);
// update Cart

router.put('/:id', cartController.updateCart);
// delete Cart

router.delete('/:id', cartController.deleteCart);

module.exports = router;
