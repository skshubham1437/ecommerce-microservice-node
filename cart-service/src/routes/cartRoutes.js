const express = require('express');
const { addToCart, updateCart, removeFromCart } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, addToCart);
router.put('/update', authMiddleware, updateCart);
router.delete('/remove', authMiddleware, removeFromCart);

module.exports = router;
