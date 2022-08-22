module.exports = app => {
    const farmMachine = require("../controller/farm-machine-controller");
    var router = require("express").Router();
    // Create a new deliveryHistory
    router.post("/operation/start", farmMachine.operationStart);
    router.post("/operation/stop", farmMachine.operationStop);
    router.get("/operation", farmMachine.operationAll);
    router.get("/operation/:key",farmMachine.operationByMachineId);
    
    app.use('/api/farm-machine', router);
  };