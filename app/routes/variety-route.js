<<<<<<< HEAD
<<<<<<< HEAD
const { authJwt } = require("../middleware");

=======
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
=======
const { authJwt } = require("../middleware");

>>>>>>> feature/auth
module.exports = app => {
    const varieties = require("../controller/variety-controller");
    var router = require("express").Router();

    // Create a new deliveryHistory
<<<<<<< HEAD
<<<<<<< HEAD
    router.post("/",[authJwt.verifyToken,authJwt.isAdmin], varieties.addVariety);
    router.get("/", [authJwt.verifyToken,authJwt.isAdmin],varieties.variety);
    router.get("/:croptype", [authJwt.verifyToken,authJwt.isAdmin],varieties.getBycroptype)
=======
    router.post("/", varieties.addVariety);
    router.get("/", varieties.variety);
    router.get("/:croptype", varieties.getBycroptype)
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
=======
    router.post("/",[authJwt.verifyToken,authJwt.isAdmin], varieties.addVariety);
    router.get("/", [authJwt.verifyToken,authJwt.isAdmin],varieties.variety);
    router.get("/:croptype", [authJwt.verifyToken,authJwt.isAdmin],varieties.getBycroptype)
>>>>>>> feature/auth
   
    app.use('/api/varieties', router);
}