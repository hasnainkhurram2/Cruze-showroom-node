const express = require("express");
const CarController = require("./../../controller/admin/carController");

const router = express.Router();

router.route("/").post(CarController.createCar);

router
  .route("/:id")
  .patch(CarController.updateCar)
  .delete(CarController.deleteCar);

module.exports = router;
