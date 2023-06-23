/**
 * Save in the database the new Plan
 * @param {plan} -> Plan
 */
module.exports.postPlanToDB = async plan => await plan.save();