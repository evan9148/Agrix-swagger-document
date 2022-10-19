const authJwt = require("../middleware/authJwt.js");

module.exports = app =>{
    const driver=require("../controller/driver-controller.js");
    var router = require("express").Router();

    router.get("/"  ,[authJwt.verifyToken,authJwt.isAdmin], driver.getDriver)
    router.post("/"  ,[authJwt.verifyToken,authJwt.isAdmin], driver.addDriver)
    router.get("/:id"  ,[authJwt.verifyToken,authJwt.isAdmin],driver.driverById)
    router.put("/:id"   ,[authJwt.verifyToken,authJwt.isAdmin],driver.updateDriverById)
    router.delete("/:id"  ,[authJwt.verifyToken,authJwt.isAdmin],driver.deleteDriverById)



    app.use("/api/driver" ,router);
};