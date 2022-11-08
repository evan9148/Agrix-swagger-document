const { authJwt } = require("../middleware");

module.exports = app => {
    const dropdown = require("../controller/alldropdown-controller");
    var router = require("express").Router();

    router.get("/", [authJwt.verifyToken,authJwt.isAdmin],dropdown.getDropdown);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin], dropdown.addDropdown);
    // router.put("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.updateMachineById);
    // router.delete("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.deleteMachineById);

    app.use('/api/dropdown', router);
};