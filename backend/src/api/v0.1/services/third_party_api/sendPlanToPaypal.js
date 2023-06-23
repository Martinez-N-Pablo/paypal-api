const request = require('request');

module.exports.sendPlanToPaypal = ({url, plan}) => {
    return new Promise((resolve, reject) => {
        request.post(`${url}/v1/billing/plans`, {
            auth: {
                username: process.env.PAYPAL_PUBLIC_KEY,
                password: process.env.PAYPAL_SECRET_KEY
              },
            json: true,
            body: plan
        }, async (err, response) => {
            if(err){
                console.log(err);
                reject(new Error('Error connecting with Paypal API'));
            }

            (response.statusCode >= 200 && response.statusCode < 300) ? 
                resolve(response.body.id) : 
                reject(new Error(`Failed to create plan, code: ${response.statusCode}`));
        })
    });
}