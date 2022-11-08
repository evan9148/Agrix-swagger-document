const { authJwt } = require("../middleware");

module.exports = app => {
    const implementype = require("../controller/implement-type-controller");
    var router = require("express").Router();

    router.get("/", [authJwt.verifyToken,authJwt.isAdmin],implementype.getImplementType);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin], implementype.addImplementType);
    // router.put("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.updateMachineById);
    // router.delete("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.deleteMachineById);

    app.use('/api/implementType', router);
};