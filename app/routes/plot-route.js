const { authJwt } = require("../middleware");

module.exports = app => {
    const plot = require("../controller/plot-controller");
    var router = require("express").Router();

    router.get("/",[authJwt.verifyToken,authJwt.isAdmin],plot.plot);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin], plot.addPlot);
    router.get("/:farmerId", [authJwt.verifyToken,authJwt.isAdmin],plot.plotsByFarmerId);
    router.get("/plotById/:id",[authJwt.verifyToken,authJwt.isAdmin], plot.plotById);
    router.put("/:id", [authJwt.verifyToken,authJwt.isAdmin],plot.updatePlotById);
    router.delete("/:id", [authJwt.verifyToken,authJwt.isAdmin],plot.deletePlotById);

    app.use('/api/plot', router);
  };