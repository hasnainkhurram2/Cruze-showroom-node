const models = require("../../models/index");

//done
exports.getAllReviews = async (req, res) => {
  const temp = await models.Review.findAll();

  res.status(200).json({
    status: "success",
    data: temp,
  });
};

exports.getReview = async (req, res) => {
  const _id = req.params.id;
  const yourReview = await models.Review.findByPk(_id);

  if (!yourReview) {
    res.status(404).json({
      error: "could not find review with that id",
    });
  } else {
    res.status(200).json({
      data: yourReview,
    });
  }
};
