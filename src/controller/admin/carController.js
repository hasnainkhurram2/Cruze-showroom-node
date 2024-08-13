const models = require("../../models/index");

exports.createCar = async (req, res) => {
  try {
    const newCar = await models.Car.create({
      id: req.body.id, // Use req.body data
      make: req.body.make,
      model: req.body.model,
      model_year: req.body.model_year,
      category: req.body.category,
      price: req.body.price,
    });

    res.status(201).json({
      status: "success",
      message: "Car created successfully",
      data: newCar,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Car creation failed",
      error: error.message,
    });
  }
};

exports.updateCar = async (req, res) => {};

exports.deleteCar = async (req, res) => {
  const _id = req.params.id;

  try {
    await models.Car.destroy({
      where: {
        id: _id,
      },
    });

    res.status(200).json({
      message: `Car deleted with id: ${_id}`,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
