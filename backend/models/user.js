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
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
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
        type: [mongoose.ObjectId],
        required: true,
    },
    listing_history: {
        type: [mongoose.ObjectId],
        required: true,
    },
});

module.exports = mongoose.model('user', UserSchema);