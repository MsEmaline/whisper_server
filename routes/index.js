let router = require("express").Router();

router.use("/secrets", require("./secretRoute"));
router.use("/users", require("./userRoute"));




module.exports = router;



