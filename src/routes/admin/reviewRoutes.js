const express = require("express");
const ReviewController = require("./../../controller/admin/reviewController");

const router = express.Router();

router.route("/").get(ReviewController.getAllReviews);

router.route("/:id").get(ReviewController.getReview);

module.exports = router;
