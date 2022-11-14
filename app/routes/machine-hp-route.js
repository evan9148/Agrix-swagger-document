const { authJwt } = require("../middleware");

module.exports = app => {
    const machinehp = require("../controller/machine-hp-controller");
    var router = require("express").Router();

    router.get("/", [authJwt.verifyToken,authJwt.isAdmin], machinehp.getMachinehp);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin], machinehp.addMachinehp);
    // router.put("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.updateMachineById);
    // router.delete("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.deleteMachineById);

    app.use('/api/machinehp', router);
};