module.exports = app => {
    const plot = require("../controller/plot-controller");
    var router = require("express").Router();

    router.get("/",plot.plot);
    router.post("/", plot.addPlot);
    router.get("/:farmerId", plot.plotsByFarmerId);
    router.get("/plotById/:id", plot.plotById);
    router.put("/:id", plot.updatePlotById);
    router.delete("/:id", plot.deletePlotById);

    app.use('/api/plot', router);
  };