<<<<<<< HEAD
<<<<<<< HEAD
const { authJwt } = require("../middleware");

=======
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
=======
const { authJwt } = require("../middleware");

>>>>>>> feature/auth
module.exports = app => {
    const districts = require("../controller/district-controller");
    var router = require("express").Router();

<<<<<<< HEAD
    // Create a new deliveryHistory
<<<<<<< HEAD
    router.post("/",[authJwt.verifyToken,authJwt.isAdmin], districts.addDistrict);
    router.get("/", [authJwt.verifyToken,authJwt.isAdmin],districts.getDistrict);
    router.get("/:state", [authJwt.verifyToken,authJwt.isAdmin],districts.getDistrictByState);
=======
    router.post("/", districts.addDistrict);
    router.get("/", districts.getDistrict);
    router.get("/:state", districts.getDistrictByState);
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
   
    app.use('/api/district', router);
=======
    // // Create a new deliveryHistory
    // router.post("/",[authJwt.verifyToken,authJwt.isAdmin], districts.addDistrict);
    // router.get("/", [authJwt.verifyToken,authJwt.isAdmin],districts.getDistrict);
    // router.get("/:state", [authJwt.verifyToken,authJwt.isAdmin],districts.getDistrictByState);
   
    // app.use('/api/district', router);






      // Create a new deliveryHistory
      router.post("/",[authJwt.verifyToken,authJwt.isAdmin], districts.addDistrict);
      router.get("/",[authJwt.verifyToken,authJwt.isAdmin], districts.getDistrict);
      router.get("/:stateId",[authJwt.verifyToken,authJwt.isAdmin], districts.getDistrictByState);
  
      app.use('/api/district', router);
>>>>>>> feature/auth
};