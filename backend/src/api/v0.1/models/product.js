const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        require: true,
    },
    description: String,
    type: {
        type: String,
        uppercase:true
    },
    category: {
        type: String,
        uppercase:true
    }
},{
    timestamps: true,
    collection: 'Product'
})

ProductSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model('Product', ProductSchema)