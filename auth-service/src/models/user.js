module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      otp: {
        type: DataTypes.STRING,
      },
    });
    return User;
  };
  