module.exports = app => {
    const farmer = require("../controller/farmer-controller");
    var router = require("express").Router();

    router.get("/",farmer.farmer);
    router.post("/", farmer.addFarmer);
    router.get("/:id",farmer.farmerById);
    router.put("/:id",farmer.updateFarmerById);
    router.delete("/:id",farmer.deleteFarmerById);


    app.use('/api/farmer', router);
  };