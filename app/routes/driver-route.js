module.exports = app =>{
    const driver=require("../controller/driver-controller.js");
    var router = require("express").Router();

    router.get("/",driver.getDriver)
    router.post("/"  ,driver.addDriver)
    router.get("/:id",driver.driverById)
    router.put("/:id",driver.updateDriverById)
    router.delete("/:id",driver.deleteDriverById)


    app.use("/api/driver" ,router);
};