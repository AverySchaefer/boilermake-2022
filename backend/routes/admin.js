const express = require('express');
const itemRouter = require('/item');
const userRouter = require('/user');

const router = express.Router();

/*//Index routes
router.get('/', adminController.getItemIndex);
router.get('/', userController.getUserIndex);*/

//POST routes
router.post('/user', userRouter.postUser);
router.post('/item', itemRouter.postItem);

//GET routes
router.get('/:itemId', itemRouter.getItem);
router.get('/:userId', userRouter.getUser);
router.get('/tags', itemRouter.getItemByTag);
router.get('/name', itemRouter.getItemByName);
router.get('/price', itemRouter.getItemByPrice);
router.get('/login', userRouter.loginUser);

module.exports = router;