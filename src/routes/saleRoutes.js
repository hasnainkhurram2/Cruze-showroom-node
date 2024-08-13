const express = require("express");
const SaleController = require("./../controller/saleController");
// const SaleAdminController = require("./../controller/admin/saleController");

const router = express.Router();

router
  .route("/")
  .get(SaleController.getAllSales) //admin
  .post(SaleController.createSale);

router.route("/:id").get(SaleController.getSale);

module.exports = router;
