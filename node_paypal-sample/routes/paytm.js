const router = require("express").Router();
const paytmController = require("../controller/paytmController");

router.route("/paynow").post(paytmController.payInit);
router.route("/callback").post(paytmController.verifyPayment);

module.exports = router;
