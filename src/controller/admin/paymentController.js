const models = require("../../models/index");

//done
exports.getAllPayments = async (req, res) => {
  const temp = await models.Payment.findAll();

  res.status(200).json({
    status: "success",
    data: temp,
  });
};

exports.getPayment = async (req, res) => {
  const _id = req.params.id;
  const yourPayment = models.Payment.findByPk(_id);

  if (!yourPayment) {
    res.status(404).json({
      error: "could not find payment with that id",
    });
  } else {
    res.status(200).json({
      data: yourPayment,
    });
  }
};

exports.updatePayment = async (req, res) => {};

exports.deletePayment = async (req, res) => {
  const _id = req.params.id;

  try {
    await models.Payment.destroy({
      where: {
        id: _id,
      },
    });

    res.status(200).json({
      message: `Payment deleted with id: ${_id}`,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
