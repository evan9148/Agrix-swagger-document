const authJwt = require("../middleware/authJwt.js");


module.exports = app => {
    const farmer = require("../controller/farmer-controller");
    var router = require("express").Router();

<<<<<<< HEAD
    router.get("/", [authJwt.verifyToken,authJwt.isAdmin],farmer.farmer);
    router.get("/:id",[authJwt.verifyToken,authJwt.isAdmin],farmer.farmerById);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin],farmer.addFarmer);
    router.put("/:id",[authJwt.verifyToken,authJwt.isAdmin],farmer.updateFarmerById);
    router.delete("/:id",[authJwt.verifyToken,authJwt.isAdmin],farmer.deleteFarmerById);
    router.get("/cluster/:clusterId",[authJwt.verifyToken,authJwt.isAdmin],farmer.farmersByClusterId);
    
    app.use('/api/farmer',[authJwt.verifyToken,authJwt.isAdmin], router);
=======
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
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
  };