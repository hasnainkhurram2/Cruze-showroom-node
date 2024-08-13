const models = require("../models/index");

exports.getAllReviews = async (req, res) => {
  try {
    const yourReviews = await models.Review.findAll({
      where: {
        user_id: req.params.id,
      },
    });

    res.status(400).json({
      data: yourReviews,
    });
  } catch (error) {
    res.status(200).json({
      data: error.message,
    });
  }
};

//done
exports.createReview = async (req, res) => {
  try {
    const newReview = await models.Review.create({
      id: req.body.id, // Use req.body data
      car_id: req.body.car_id,
      user_id: req.body.user_id,
      content: req.body.content,
    });

    res.status(201).json({
      status: "success",
      message: "Review created successfully",
      data: newReview,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Review creation failed",
      error: error.message,
    });
  }
};

exports.getReview = async (req, res) => {
  try {
    const yourReview = await models.Review.findAll({
      where: {
        id: req.params.reviewId,
        user_id: req.params.id,
      },
    });

    res.status(400).json({
      data: yourReview,
    });
  } catch (error) {
    res.status(200).json({
      data: error.message,
    });
  }
};

exports.updateReview = (req, res) => {};

exports.deleteReview = async (req, res) => {
  const _id = req.params.id;

  try {
    await models.Review.destroy({
      where: {
        id: _id,
      },
    });

    res.status(200).json({
      message: `Review deleted with id: ${_id}`,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
