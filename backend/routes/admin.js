const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-user', adminController.getAddUser);
router.get('/add-item', adminController.getAddItem);

router.post('/add-user', adminController.postUser);
router.post('/add-item', adminController.postItem);

router.get('/:itemId', adminController.getItem);


module.exports = router;