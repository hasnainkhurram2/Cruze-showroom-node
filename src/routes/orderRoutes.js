const express = require("express");
const OrderController = require("./../controller/orderController");

const router = express.Router();

router
  .route("/")
  .get(OrderController.getAllOrders)
  .post(OrderController.createOrder);

router
  .route("/:id")
  .get(OrderController.getOrder)
  .patch(OrderController.updateOrder)
  .delete(OrderController.deleteOrder);

module.exports = router;
