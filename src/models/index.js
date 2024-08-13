const Sequelize = require("sequelize");
const { FORCE } = require("sequelize/lib/index-hints");
const config = require("../config/config.js").development;
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.js")(db.sequelize, db.Sequelize.DataTypes);
db.Order = require("./order.js")(db.sequelize, db.Sequelize.DataTypes);
db.Review = require("./review.js")(db.sequelize, db.Sequelize.DataTypes);
db.Sale = require("./sale.js")(db.sequelize, db.Sequelize.DataTypes);
db.Car = require("./car.js")(db.sequelize, db.Sequelize.DataTypes);
db.Payment = require("./payment.js")(db.sequelize, db.Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize
  .sync()
  .then(() => {
    console.log("Database working");
  })
  .catch((error) => {
    console.error("Error creating database:", error);
  });

module.exports = db;
