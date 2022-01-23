const express = require('express');
const adminController = require('../controllers/admin');
const userController = require('../controllers/user');

const router = express.Router();

//Index routes
router.get('/', adminController.getItemIndex);
router.get('/', userController.getUserIndex);

//Add getter routes
router.get('/add-user', userController.getAddUser);
router.get('/add-item', adminController.getAddItem);

//POST routes
router.post('/add-user', userController.postUser);
router.post('/add-item', adminController.postItem);

//Filter routes
router.get('/:itemId', adminController.getItem);
router.get('/:userId', userController.getUser);
router.get('/:itemTags', adminController.getItemByTag);
router.get('/get-by-name/:itemName', adminController.getItemByName);
router.get('/get-by-price/:itemPrice', adminController.getItemByPrice);
router.get('/login', userController.loginUser);

module.exports = router;