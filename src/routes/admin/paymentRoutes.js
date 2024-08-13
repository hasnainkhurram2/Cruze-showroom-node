const express = require("express");
const PaymentController = require("./../../controller/admin/paymentController");

const router = express.Router();

router.route("/").get(PaymentController.getAllPayments);

router
  .route("/:id")
  .all(PaymentController.getPayment)
  .patch(PaymentController.updatePayment)
  .delete(PaymentController.deletePayment);

module.exports = router;
