const { Model, DataTypes } = require("sequelize");
const Order = require("./order.js");

class Payment extends Model {
  static associate(models) {
    Payment.belongsTo(models.Order, { foreignKey: "order_id", as: "order" });
  }
}
module.exports = (sequelize) => {
  Payment.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      payment_method: {
        type: DataTypes.ENUM("cash", "credit", "debit"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Payment",
      tableName: "payments", // optional: specify table name if different from model name
      timestamps: false, // optional: disable timestamps if not needed
    }
  );

  return Payment;
};
