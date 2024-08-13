const express = require("express");
const UserController = require("./../controller/userController");
const SaleController = require("../controller/saleController");
const ReviewController = require("../controller/reviewController");
const OrderController = require("../controller/orderController");
const PaymentController = require("../controller/paymentController");

const router = express.Router();

router.route("/").post(UserController.createUser);

router
  .route("/:id")
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

router.route("/:id/sales/:saleId").get(SaleController.getSale);
router.route("/:id/sales").get(SaleController.getAllSales);

router.route("/:id/reviews/:reviewId").get(ReviewController.getReview);
router.route("/:id/reviews").get(ReviewController.getAllReviews);

router.route("/:id/orders/:orderId").get(OrderController.getOrder);
router.route("/:id/orders").get(OrderController.getAllOrders);

router.route("/:id/payments/:paymentId").get(PaymentController.getPayment);
router.route("/:id/payments").get(PaymentController.getAllPayments);

module.exports = router;
