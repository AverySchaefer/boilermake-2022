const User = require('../models/user');
const Item = require('../models/item');

//Get indexes of items and users
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

//methods for getting item with various filters
exports.getItem = async (req, res) => {
    const itemId = req.params.itemId;
    //console.log(itemId);
    const item = await Item.findById(itemId, (item) => item).clone().catch(function(err){ });
    //console.log("testing 2");
    try {
        console.log(item);
        res.status(200).render('item', { item: item });
    } catch (error) {
        console.log(error);
    }
};

exports.getItemByTag = async (req, res) => {
    //console.log("in getItemByTag");
    const itemTags = req.params.itemTags;
    const trimmedTags = itemTags.replace(':', '');
    //console.log("got tags");
    console.log(itemTags);
    console.log(trimmedTags);
    const item = await Item.find({tag: trimmedTags}).clone().catch(function(err){ });
    //console.log("retrieved items");
    try {
        console.log(item);
        res.status(200).render('item', { item: item });
    }  catch (error) {
        console.log(error);
    }
};

exports.getItemByName = async (req, res) => {
    //console.log("in getItemByTag");
    const itemName = req.params.itemName;
    const trimmedName = itemName.replace(':', '');
    //console.log("got tags");
    console.log(itemName);
    console.log(trimmedName);
    const item = await Item.find({name: trimmedName}).clone().catch(function(err){ });
    //console.log("retrieved items");
    try {
        console.log(item);
        res.status(200).render('item', { item: item });
    }  catch (error) {
        console.log(error);
    }
};

exports.getItemByPrice = async (req, res) => {
    //console.log("in getItemByTag");
    const itemPrice = req.params.itemPrice;
    const trimmedPrice = itemPrice.replace(':', '');
    //console.log("got tags");
    console.log(itemPrice);
    console.log(trimmedPrice);
    const items = await Item.find({price: {$lt: trimmedPrice}}).clone().catch(function(err){ });
    //console.log("retrieved items");
    try {
        console.log(items);
        res.status(200).render('item', { item: items });
    }  catch (error) {
        console.log(error);
    }
};

//Get single items or users via ID
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

//POST methods for items and users
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