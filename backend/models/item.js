const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    item_id: {
        type: Number,
        required: true,
    },
    seller_id: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    images: {
        type: [String],
        required: true,
    },
    tag: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('item', ItemSchema);