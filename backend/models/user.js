const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.ObjectId,
        required: false,
    },
    rating: {
        type: Number,
        required: false,
    },
    num_ratings: {
        type: Number,
        required: false,
    }, 
    profile_picture: {
        type: String,
        required: false,
    },
    purchase_history: {
        type: [Number],
        required: false,
    },
    listing_history: {
        type: [Number],
        required: false,
    },
});

module.exports = mongoose.model('user', UserSchema);