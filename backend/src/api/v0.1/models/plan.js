const { Schema, model } = require('mongoose');

const PlanSchema = Schema({
    hash: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        require: true,
        default: 'Plan Mensual'
    },
    product_id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'Servicio de Plan Básico'
    },
    status: {
        type: String,
        default: 'ACTIVE'
    },
    billing_cycles: [{
        frequency: {
            interval_unit: {
                type: String,
                default: 'MONTH',
                uppercase:true
            },
            interval_count: {
                type: Number,
                min: 1,
                default: 1
            }
        },
        tenure_type: {
            type: String,
            default: 'REGULAR',
            uppercase: true
        },
        sequence: {
            type: Number,
            min: 1,
            default: 1
        },
        total_cycles: {
            type: Number,
            min: 1,
            max: 12,
            default: 1
        },
        pricing_scheme: {
            fixed_price: {
                value: {
                    type: Number,
                    min: 0,
                    default: 10
                },
                currency_code: {
                    type: String,
                    default: 'EUR',
                    uppercase:true
                }
            }
        }
    }],
    payment_preferences: {
        auto_bill_outstanding: {
            type: Boolean,
            default: true
        },
       /*  setup_fee: {
            value: {
                type: String,
                default: "10"
            },
            currency_code: {
                type: String,
                default: 'EUR',
                uppercase: true
            }
        },
        setup_fee_failure_action: {
            type: String,
            default: 'CANCEL',
            uppercase: true
        }, */
        payment_failure_threshold: {
            type: Number,
            default: 3
        }
    },
    taxes: {
        percentage: {
            type: String,
            default: "21"
        },
        inclusive: {
            type: Boolean,
            default: true
        }
    }
},{
    timestamps: true,
    collection: 'Plan'
});

PlanSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
});

module.exports = model('Plan', PlanSchema);