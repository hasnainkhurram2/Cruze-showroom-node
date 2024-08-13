const express = require("express");
const OrderController = require("./../../controller/admin/orderController");

const router = express.Router();

router.route("/").get(OrderController.getAllOrders);

router.route("/:id").get(OrderController.getOrder);

module.exports = router;
