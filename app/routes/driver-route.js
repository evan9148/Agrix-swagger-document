const authJwt = require("../middleware/authJwt.js");

module.exports = app =>{
    const driver=require("../controller/driver-controller.js");
    var router = require("express").Router();

<<<<<<< HEAD
    router.get("/"  ,[authJwt.verifyToken,authJwt.isAdmin], driver.getDriver)
    router.post("/"  ,[authJwt.verifyToken,authJwt.isAdmin], driver.addDriver)
    router.get("/:id"  ,[authJwt.verifyToken,authJwt.isAdmin],driver.driverById)
    router.put("/:id"   ,[authJwt.verifyToken,authJwt.isAdmin],driver.updateDriverById)
    router.delete("/:id"  ,[authJwt.verifyToken,authJwt.isAdmin],driver.deleteDriverById)
=======
    router.get("/",driver.getDriver)
    router.post("/"  ,driver.addDriver)
    router.get("/:id",driver.driverById)
    router.put("/:id",driver.updateDriverById)
    router.delete("/:id",driver.deleteDriverById)
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684


    app.use("/api/driver" ,router);
};