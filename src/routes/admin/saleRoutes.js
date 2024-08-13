const express = require("express");
const SaleController = require("./../../controller/admin/saleController");

const router = express.Router();

router.route("/").get(SaleController.getAllSales); //admin

router
  .route("/:id")
  .get(SaleController.getSale)
  .patch(SaleController.updateSale)
  .delete(SaleController.deleteSale);

module.exports = router;
