const { Cart } = require('../models');

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;
  try {
    const cartItem = await Cart.findOne({ where: { userId, productId } });
    if (cartItem) {
      cartItem.quantity += quantity;
      if (cartItem.quantity > process.env.MAX_QUANTITY) {
        return res.status(400).send('Max quantity exceeded');
      }
      await cartItem.save();
    } else {
      await Cart.create({ userId, productId, quantity });
    }
    res.status(200).send('Product added to cart');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;
  try {
    const cartItem = await Cart.findOne({ where: { userId, productId } });
    if (!cartItem) {
      return res.status(404).send('Product not found in cart');
    }
    cartItem.quantity = quantity;
    await cartItem.save();
    res.status(200).send('Cart updated');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const removeFromCart = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;
  try {
    const cartItem = await Cart.findOne({ where: { userId, productId } });
    if (!cartItem) {
      return res.status(404).send('Product not found in cart');
    }
    await cartItem.destroy();
    res.status(200).send('Product removed from cart');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addToCart, updateCart, removeFromCart };
