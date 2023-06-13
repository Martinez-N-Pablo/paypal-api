const { Schema, model, SchemaType } = require('mongoose');

const SubscripcionSchema = Schema({
    plan_id: {
        type: Schema.Types.ObjectId,
        ref: 'Plan',
        require: true,
    },
    start_time: {
        type: Date,
    },
    quantity: {
        type: Number,
        min: 0,
        default: 1
    },
    subscriber: {
        name: {
            given_name: String,
            surname: String
        },
        email_adess: String
    },
    
},{
    collection: 'Subscription'
})

SubscripcionSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

const modelSubcription = model('Subscripcion', SubscripcionSchema)

module.exports = { modelSubcription }
