const mongoose = require('mongoose');

const AnimeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user_id: {
        type: Number,
        required: true,
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
        required: true,
    },
    listing_history: {
        type: [Number],
        required: true,
    },
});

module.exports = mongoose.model('series', AnimeSchema);