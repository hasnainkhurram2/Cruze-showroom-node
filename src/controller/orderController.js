const models = require("../models/index");

exports.getAllOrders = async (req, res) => {
  try {
    const yourOrders = await models.Order.findAll({
      where: {
        user_id: req.params.id,
      },
    });

    res.status(400).json({
      data: yourOrders,
    });
  } catch (error) {
    res.status(200).json({
      data: error.message,
    });
  }
};

//done
exports.createOrder = async (req, res) => {
  try {
    const newOrder = await models.Order.create({
      id: req.body.id, // Use req.body data
      car_id: req.body.car_id,
      user_id: req.body.user_id,
      date: req.body.date,
      expected_delivery: req.body.expected_delivery,
      status: req.body.status,
    });

    res.status(201).json({
      status: "success",
      message: "Order placed successfully",
      data: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Car could not be placed",
      error: error.message,
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const yourOrder = await models.Order.findAll({
      where: {
        id: req.params.orderId,
        user_id: req.params.id,
      },
    });

    res.status(400).json({
      data: yourOrder,
    });
  } catch (error) {
    res.status(200).json({
      data: error.message,
    });
  }
};

exports.updateOrder = (req, res) => {};

exports.deleteOrder = async (req, res) => {
  const _id = req.params.id;

  try {
    await models.Order.destroy({
      where: {
        id: _id,
      },
    });

    res.status(200).json({
      message: `Order deleted with id: ${_id}`,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
