const { authJwt } = require("../middleware");

module.exports = app => {
    const identifier = require("../controller/identifier-controller");
    var router = require("express").Router();

    router.get("/", [authJwt.verifyToken,authJwt.isAdmin], identifier.getIdentifier);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin], identifier.addIdentifier);
    // router.put("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.updateMachineById);
    // router.delete("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.deleteMachineById);

    app.use('/api/identifier', router);
};