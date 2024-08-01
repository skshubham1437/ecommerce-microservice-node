const { Product } = require('../models');

const listProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      order: [['creation_dt', 'DESC']],
    });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { listProducts };
