const User = require('../models/User');
const Item = require('../models/Item');

exports.getIndex = (req, res) => {
    res.status(200).render('index');
};

//Getter methods for different models

exports.getAddUser = (req, res) => {
    res.status(200).render('edit user');
};

exports.getAddItem = (req, res) => {
    res.status(200).render('edit item');
};

exports.postUser = (req, res) => {
    const { name, user_id, rating, num_ratings, profile_picture, purchase_history, listing_history} = req.body;

    const user = new User({ name: name, user_id: user_id, rating: rating, num_ratings: num_ratings, profile_picture: profile_picture, purchase_history: purchase_history, listing_history: listing_history });
    user.save();
    console.log('User added to the database');
    res.status(201).redirect('/');
};

exports.postItem = (req, res) => {
    const { item_id, name, price, seller_id, description, images, tag } = req.body;

    const item = new Item({ name: name, item_id: item_id, price: price, seller_id: seller_id, description: description, images: images, tag:tag });
    item.save();
    console.log('Item Added to the database');
    res.status(201).redirect('/');
};