const { authJwt } = require("../middleware");


module.exports = app => {
    const varieties = require("../controller/variety-controller");
    var router = require("express").Router();


    router.post("/",[authJwt.verifyToken,authJwt.isAdmin], varieties.addVariety);
    router.get("/", [authJwt.verifyToken,authJwt.isAdmin],varieties.variety);
    router.get("/:croptype", [authJwt.verifyToken,authJwt.isAdmin],varieties.getBycroptype)

   
    app.use('/api/varieties', router);
}