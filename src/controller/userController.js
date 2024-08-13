const models = require("../models/index");

exports.getUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const temp = await models.User.findByPk(_id);
    console.log(temp);

    res.status(200).json({
      data: temp,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "User not found",
      error: error.message,
    });
  }
};

//done
exports.createUser = async (req, res) => {
  try {
    const newUser = await models.User.create({
      id: req.body.id, // Use req.body data
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      DOB: req.body.DOB,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "User creation failed",
      error: error.message,
    });
  }
};

exports.updateUser = (req, res) => {};

//done
exports.deleteUser = async (req, res) => {
  try {
    await models.User.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      message: `User with id: ${req.params.id} Deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "User deletion failed",
      error: error.message,
    });
  }
};
