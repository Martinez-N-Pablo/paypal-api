const {Router} = require('express');
const { planController } = require('../controllers/planController');
const { check } = require('express-validator');
const router = Router();

router.post('/', [
    check('name', 'The value name is required').isString().not().isEmpty(),
    check('product_id', 'The value product_id is required').isString().not().isEmpty(),
    check('description', 'The value description is required').isString().not().isEmpty(),
    check('billing_cycles', 'The value billing_cycles is required').not().isEmpty(),
], planController);

module.exports = router;
