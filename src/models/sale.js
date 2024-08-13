const { Model, DataTypes } = require("sequelize");
const Car = require("./car.js");
const User = require("./user.js");
const Order = require("./order.js");

class Sale extends Model {
  static associate(models) {
    Sale.belongsTo(models.Car, {
      foreignKey: "car_id",
      as: "car",
    });

    Sale.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  }
}
module.exports = (sequelize) => {
  Sale.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      car_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Sale",
      tableName: "sales", // optional: specify table name if different from model name
      timestamps: false, // optional: disable timestamps if not needed
    }
  );

  return Sale;
};
