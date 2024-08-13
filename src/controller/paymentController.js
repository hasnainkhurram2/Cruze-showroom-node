const models = require("../models/index");

exports.getAllPayments = async (req, res) => {
  try {
    const yourPayments = await models.Payment.findAll({
      include: {
        model: models.Order,
        as: "order",
        where: { user_id: req.params.id },
        attributes: [],
      },
    });

    res.status(200).json({
      data: yourPayments,
    });
  } catch (error) {
    res.status(404).json({
      data: error.message,
    });
  }
};

//done
exports.createPayment = async (req, res) => {
  try {
    const newPayment = await models.Payment.create({
      id: req.body.id, // Use req.body data
      order_id: req.body.order_id,
      amount: req.body.amount,
      payment_method: req.body.payment_method,
    });

    res.status(201).json({
      status: "success",
      message: "Payment created successfully",
      data: newPayment,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Payment creation failed",
      error: error.message,
    });
  }
};

exports.getPayment = async (req, res) => {
  try {
    const yourPayment = await models.Payment.findAll({
      where: {
        id: req.params.paymentId,
      },
      include: {
        model: models.Order,
        as: "order",
        where: { user_id: req.params.id },
        attributes: [],
      },
    });

    res.status(200).json({
      data: yourPayment,
    });
  } catch (error) {
    res.status(404).json({
      data: error.message,
    });
  }
};
