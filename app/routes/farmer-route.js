module.exports = app => {
    const farmer = require("../controller/farmer-controller");
    var router = require("express").Router();

    router.get("/",farmer.farmer);
    router.get("/:id",farmer.farmerById);
    
    router.post("/", farmer.addFarmer);
    router.put("/:id",farmer.updateFarmerById);
    router.delete("/:id",farmer.deleteFarmerById);
    router.get("/cluster/:clusterId",farmer.farmersByClusterId);
    
        // router.get("/",farmer.farmer);
        // router.post("/", farmer.addFarmer);
        // router.get("/:id",farmer.farmerById);
        // router.put("/:_id",farmer.updateFarmerById);
        // router.delete("/:id",farmer.deleteFarmerById);
        // router.get("/cluster/:clusterId", farmer.farmerByclusterId);


    app.use('/api/farmer', router);
  };