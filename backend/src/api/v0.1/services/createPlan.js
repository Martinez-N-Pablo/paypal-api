const Plan = require('../models/plan');
const { sendPlanToPaypal } = require('../services/third_party_api/sendPlanToPaypal');
const { postPlanToDB } = require('../database/querys/planQuerys');
const config = require('../../../config/config');

module.exports.createPlan = async ({name, product_id, description, billing_cycles}) => {
    const productData = {name, product_id, description, billing_cycles};
    let plan = new Plan(productData);

    const idPlan = await sendPlanToPaypal({url: config.PaypalAPI, plan});

    plan.hash = idPlan;

    if(idPlan){
        return await postPlanToDB(plan);
    }
    else{
        return false;
    }
};