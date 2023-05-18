const xpress = require("express");

const router = xpress.Router();
const { checkout } = require("../chapa_payment");

router.post("/checkout", checkout);

module.exports = router;
