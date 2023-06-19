/**
 * Save in the database the new product
 * @param {product} -> Product
 */
module.exports.postProductToDB = async product => await product.save();