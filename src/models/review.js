const { Model, DataTypes } = require("sequelize");
const Car = require("./car.js");

class Review extends Model {
  static associate(models) {
    Review.belongsTo(models.Car, { foreignKey: "car_id", as: "car" });
    Review.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}
module.exports = (sequelize) => {
  Review.init(
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
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "reviews",
      tableName: "reviews", // optional: specify table name if different from model name
      timestamps: false, // optional: disable timestamps if not needed
    }
  );

  return Review;
};
