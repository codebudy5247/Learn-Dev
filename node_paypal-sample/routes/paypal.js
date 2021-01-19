const router = require("express").Router();
const paypalController = require("../controller/paypalController");

router.route("/pay").post(paypalController.payInit);
router.route("/success").get(paypalController.paymentSucess);
router.route("/cancel").get(paypalController.paymentCancel);

module.exports = router;
