const response = require('express');
const { createPlan } = require('../services/createPlan');

module.exports.planController = async (req, res = response) => {
    const {
        name,
        product_id,
        description,
        billing_cycles
    } = req.body;

    try {
        const plan = await createPlan({name, product_id, description, billing_cycles});

        if(plan){
            res.json({
                status: 201,
                message: 'Plan created succesfully',
                plan
            });
        }
        else{
            res.status(404).json({
                message: 'Error al realizar la peticion a Paypal'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'Failed to create Paypal Plan'
        });
    }
}