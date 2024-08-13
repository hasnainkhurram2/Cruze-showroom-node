const models = require("../../models/index");

//done
exports.getAllOrders = async (req, res) => {
  const temp = await models.Order.findAll();

  res.status(200).json({
    status: "success",
    data: temp,
  });
};

exports.getOrder = async (req, res) => {
  const _id = req.params.id;
  const yourOrder = models.Order.findByPk(_id);

  if (!yourOrder) {
    res.status(404).json({
      error: "could not find order with that id",
    });
  } else {
    res.status(200).json({
      data: yourOrder,
    });
  }
};
