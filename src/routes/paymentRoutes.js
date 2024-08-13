const express = require("express");
const PaymentController = require("./../controller/paymentController");

const router = express.Router();

router
  .route("/")
  .get(PaymentController.getAllPayments)
  .post(PaymentController.createPayment);

router.route("/:id").get(PaymentController.getPayment);

module.exports = router;
