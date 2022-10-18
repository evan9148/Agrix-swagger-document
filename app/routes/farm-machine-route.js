const { authJwt } = require("../middleware");

module.exports = app => {
    const farmMachine = require("../controller/farm-machine-controller");
    var router = require("express").Router();
    // Create a new deliveryHistory
    router.post("/operation/start", [authJwt.verifyToken,authJwt.isAdmin],farmMachine.operationStart);
    router.post("/operation/stop", [authJwt.verifyToken,authJwt.isAdmin],farmMachine.operationStop);
    router.get("/operation", [authJwt.verifyToken,authJwt.isAdmin],farmMachine.operationAll);
    router.get("/operation/:key",[authJwt.verifyToken,authJwt.isAdmin],farmMachine.operationByMachineId);
    
    app.use('/api/farm-machine', router);
  };