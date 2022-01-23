const express = require('express');
const adminController = require('../controllers/admin');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/', adminController.getItemIndex);
router.get('/', userController.getUserIndex);

router.get('/add-user', userController.getAddUser);
router.get('/add-item', adminController.getAddItem);

router.get('/:itemTags', adminController.getItemByTag);

router.post('/add-user', userController.postUser);
router.post('/add-item', adminController.postItem);

router.get('/:itemId', adminController.getItem);
router.get('/:userId', userController.getUser);


module.exports = router;