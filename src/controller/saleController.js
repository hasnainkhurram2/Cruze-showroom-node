const models = require("../models/index");

exports.getAllSales = async (req, res) => {
  try {
    res.status(400).json({
      data: "hello world",
    });
  } catch (error) {
    res.status(404).json({
      data: error.message,
    });
  }
};

//done
exports.createSale = async (req, res) => {
  try {
    const newSale = await models.Sale.create({
      id: req.body.id, // Use req.body data
      date: req.body.date,
      user_id: req.body.user_id,
      car_id: req.body.car_id,
    });

    res.status(201).json({
      status: "success",
      message: "Sale created successfully",
      data: newSale,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Sale creation failed",
      error: error.message,
    });
  }
};

exports.getSale = async (req, res) => {
  try {
    const yourSale = await models.Sale.findAll({
      where: {
        id: req.params.saleId,
        user_id: req.params.id,
      },
    });

    res.status(400).json({
      data: yourSale,
    });
  } catch (error) {
    res.status(200).json({
      data: error.message,
    });
  }
};
