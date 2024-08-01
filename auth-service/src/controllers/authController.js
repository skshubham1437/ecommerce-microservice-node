const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const login = async (req, res) => {
  const { mobile, otp } = req.body;
  try {
    let user = await User.findOne({ where: { mobile } });
    if (!user) {
      user = await User.create({ mobile, otp });
    }
    const token = generateToken(user);
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { login };
