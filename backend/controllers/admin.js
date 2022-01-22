const User = require('../models/user');
const Item = require('../models/item');

exports.getItemIndex = async (req, res) => {
    //res.status(200).render('index');
    const item = await Item.find((data) => data).clone().catch(function(err){});

    try {
        console.log(item);
        res.status(200).render('index', { item: item });
    } catch (error) {
        console.log(error);
    }
};

exports.getUserIndex = async (req, res) => {
    //res.status(200).render('index');
    const user = await User.find((data) => data).clone().catch(function(err){ });

    try {
        console.log(user);
        res.status(200).render('index', { user: user });
    } catch (error) {
        console.log(error);
    }
};

// methods for getting anime
exports.getItem = async (req, res) => {
    const itemId = req.params.itemId;
    console.log("testing 1");
    const item = await Item.findById(itemId, (item) => item).clone().catch(function(err){ });
    console.log("testing 2");
    try {
        console.log(item);
        res.status(200).render('item', { item: item });
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

exports.getAddItem = (req, res) => {
    res.status(200).render('edit-item');
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

exports.postItem = (req, res) => {
    const { item_id, name, price, seller_id, description, images, tag } = req.body;

    const item = new Item({ name: name, item_id: item_id, price: price, description: description, images: images, tag:tag });
    item.save();
    console.log('Item Added to the database');
    res.status(201).redirect('/');
};