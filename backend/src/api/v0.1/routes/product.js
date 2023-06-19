const { Router } = require('express');
const { createProductController } = require('../controllers/productController');

const router = Router();

router.post('/', createProductController);

module.exports = router;