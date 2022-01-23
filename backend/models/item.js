

const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    item_id: {
        type: mongoose.ObjectId,
        required: false,
    },
    seller_id: {
        type: mongoose.ObjectId,
        required: false, //change to true later
    },
    description: {
        type: String,
        required: false,
    },
    images: {
        type: [String],
        required: false, //change to true later
    },
    tag: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('item', ItemSchema);