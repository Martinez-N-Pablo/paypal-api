const request = require("request")

/**
 * @param {postProductToDB} -> function to save new product into the db
 * @param {url} -> Paypal url for requests
 * @param {product} -> Object with the data 
 * @returns {product | false}
 */
module.exports.sendProductToPaypal = (postProductToDB, { url, product }) => {
    return new Promise((resolve, reject) => {
        request.post(
          `${url}/v1/catalogs/products`,
          {
            auth: {
              username: process.env.PAYPAL_PUBLIC_KEY,
              password: process.env.PAYPAL_SECRET_KEY
            },
            body: product,
            json: true
          },
          async (err, response) => {
            if (err) {
              console.log(err);
              reject(new Error('Error al conectarse con la API de PayPal'));
            }

            if (response.statusCode >= 200 && response.statusCode < 300) {    
              // Devolvemos el producto creado
              resolve(response.body.id);
            } else {
              reject(new Error('Failed to create product'));
            }
          }
        );
    });
}