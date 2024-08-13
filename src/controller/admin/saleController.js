const models = require("../../models/index");

//done
exports.getAllSales = async (req, res) => {
  const temp = await models.Sale.findAll();

  res.status(200).json({
    status: "success",
    data: temp,
  });
};

exports.getSale = async (req, res) => {
  const _id = req.params.id;
  const yourSale = models.Sale.findByPk(_id);

  if (!yourSale) {
    res.status(404).json({
      error: "could not find sale with that id",
    });
  } else {
    res.status(200).json({
      data: yourSale,
    });
  }
};

exports.updateSale = async (req, res) => {};

exports.deleteSale = async (req, res) => {
  const _id = req.params.id;

  try {
    await models.Sale.destroy({
      where: {
        id: _id,
      },
    });

    res.status(200).json({
      message: `Sale deleted with id: ${_id}`,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
