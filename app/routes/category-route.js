const { authJwt } = require("../middleware");

module.exports = app => {
    const category = require("../controller/category-controller");
    var router = require("express").Router();

    router.get("/", [authJwt.verifyToken,authJwt.isAdmin],category.getCategory);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin], category.addCategory);
    // router.put("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.updateMachineById);
    // router.delete("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.deleteMachineById);

    app.use('/api/category', router);
};