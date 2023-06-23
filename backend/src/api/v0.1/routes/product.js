const { Router } = require('express');
const { createProductController } = require('../controllers/productController');
const { check } = require('express-validator');
const router = Router();

router.post('/', [
    check('name', 'The atributte name is necesary').isString().not().isEmpty(),
    check('description', 'The atributte description is necesary').isString().not().isEmpty(),
], createProductController);

module.exports = router;