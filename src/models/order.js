const { Model, DataTypes } = require("sequelize");
const Car = require("./car.js");
const Payment = require("./payment.js");
const User = require("./user.js");

class Order extends Model {
  static associate(models) {
    Order.hasOne(models.Payment, { foreignKey: "order_id", as: "payment" });
    Order.belongsTo(models.Car, { foreignKey: "car_id", as: "car" });
    Order.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}
module.exports = (sequelize) => {
  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      car_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      expected_delivery: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders", // optional: specify table name if different from model name
      timestamps: false, // optional: disable timestamps if not needed
    }
  );

  return Order;
};
