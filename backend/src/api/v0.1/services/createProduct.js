const config = require('../../../config/config');
const Product = require('../models/product')
const { sendProductToPaypal } = require('../services/third_party_api/sendProductToPaypal')

/**
 * @param {name, description} -> string, string
 * @returns {product} -> Product
*/
module.exports.createProduct = (async (postProductToDB, {name, description}) => {
    var productData = {
        name,
        description
    };
    
    productData.type = 'SERVICE';
    productData.category = 'SOFTWARE';
    productData.home_url = "https://localhost:5500/index.html";

    const product = new Product(productData);

    return await sendProductToPaypal(postProductToDB, {url: config.PaypalAPI, product});
})