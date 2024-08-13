const { Model, DataTypes } = require("sequelize");
const Sale = require("./sale.js");
const Order = require("./order.js");
const Review = require("./review.js");

class User extends Model {
  static associate(models) {
    User.hasMany(models.Sale, { foreignKey: "user_id", as: "sale" });
    User.hasMany(models.Order, { foreignKey: "user_id", as: "order" });
    User.hasMany(models.Review, { foreignKey: "user_id", as: "review" });
  }
}
module.exports = (sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      DOB: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          len: [5, 255],
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("customer", "admin"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users", // optional: specify table name if different from model name
      timestamps: false, // optional: disable timestamps if not needed
    }
  );

  return User;
};
