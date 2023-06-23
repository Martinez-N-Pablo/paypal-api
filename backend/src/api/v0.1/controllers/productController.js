const response = require('express');
const { createProduct } = require('../services/createProduct');
const { postProductToDB } = require('../database/querys/productQuerys');

/**
 * Endpoint POST
 * Create a new Paypal Product
 * @param {req.body} -> name, description
 * @returns {product} object
 */
module.exports.createProductController = (async (req, res = response) => {
    const { name, description } = req.body;

    try {
        const product = await createProduct(postProductToDB, { name, description });

        if(product){
            res.json({
                status: 201,
                message: 'Product created succesfully',
                product
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
            message: 'Failed to create Paypal Product'
        });
    }
})