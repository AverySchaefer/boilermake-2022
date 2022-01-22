const User = require('../models/user');

exports.getUserIndex = async (req, res) => {
    //res.status(200).render('index');
    const user = await User.find((data) => data).clone().catch(function(err){ console.log(err)});

    try {
        console.log(user);
        res.status(200).render('index-user', { user: user });
    } catch (error) {
        console.log(error);
    }
};


//Getter methods for different models

exports.getUser = async (req, res) => {
    const userId = req.params.userId;

    const user = await User.findById(userId, (user) => user);

    try {
        console.log(user);
        res.status(200).render('user', { user: user });
    } catch (error) {
        console.log(error);
    }
};

exports.getAddUser = (req, res) => {
    res.status(200).render('edit-user');
};

exports.postUser = (req, res) => {
    const { name, user_id, rating, num_ratings, profile_picture, purchase_history, listing_history} = req.body;

    const user = new User({ name: name, user_id: user_id, rating: rating, num_ratings: num_ratings, profile_picture: profile_picture, purchase_history: purchase_history, listing_history: listing_history });
    user.save();
    console.log('User added to the database');
    res.status(201).redirect('/');
};