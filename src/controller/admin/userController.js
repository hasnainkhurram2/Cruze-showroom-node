const models = require("../../models/index");

//done
exports.getAllUsers = async (req, res) => {
  const temp = await models.User.findAll();

  res.status(200).json({
    status: "success",
    data: temp,
  });
};
