module.exports = app => {
    const districts = require("../controller/district-controller");
    var router = require("express").Router();

    // Create a new deliveryHistory
    router.post("/", districts.addDistrict);
    router.get("/", districts.getDistrict);
    router.get("/:state", districts.getDistrictByState);
   
    app.use('/api/district', router);
};