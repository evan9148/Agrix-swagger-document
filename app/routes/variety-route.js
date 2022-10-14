module.exports = app => {
    const varieties = require("../controller/variety-controller");
    var router = require("express").Router();

    // Create a new deliveryHistory
    router.post("/", varieties.addVariety);
    router.get("/", varieties.variety);
    router.get("/:croptype", varieties.getBycroptype)
   
    app.use('/api/varieties', router);
}