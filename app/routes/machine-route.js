const { authJwt } = require("../middleware");

module.exports = app => {
    const machine = require("../controller/machine-controller");
    var router = require("express").Router();

    router.get("/",[authJwt.verifyToken,authJwt.isAdmin],machine.getMachine);
    router.get("/:id",[authJwt.verifyToken,authJwt.isAdmin],machine.machineById);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin], machine.addMachine);
    router.put("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.updateMachineById);
    router.delete("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.deleteMachineById);

    app.use('/api/machine', router);
};