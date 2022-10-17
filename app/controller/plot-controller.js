const db = require("../models");
const Plot = db.plot;

// Get Farmer Details
exports.plot =(req,res) =>{
  const farmerId = req.query.farmerId;
  Plot.find(farmerId)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Farmer plot with id " + farmerId });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Farmer plot with id=" + farmerId });
    });
}




// Add  Farmer Plot
exports.addPlot =  (req, res) => {
  const id = req.body._id;
    const plot = new Plot({
        farmerId:req.body.farmerId,
        location: req.body.location,
        state:req.body.state,
        village: req.body.village,
        district: req.body.district,
        latitude: req.body.latitude,
        longitude:req.body.longitude,
        areaOfPlot :req.body.areaOfPlot,
        perimeterOfPlot:req.body.perimeterOfPlot,
        plotShape :req.body.plotShape,
        soilType :req.body.soilType,
        nutrientContentAnalysis:req.body.nutrientContentAnalysis,
        waterSource : req.body.waterSource,
        plotId:req.body.plotId
    });

    plot
        .save(plot)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "some error occurred while creating the farmer plot"
            });
        });

}

exports.plotsByFarmerId =(req,res) =>{
  const farmerId = req.params.farmerId;
  Plot.find({'farmerId':farmerId})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Farmer plot with id " + farmerId });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Farmer plot with id=" + farmerId });
    });
}

exports.plotById = (req, res) => {
  const id = req.params.id;
  Plot.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Plot with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Plot with id=" + id });
    });
};



exports.updatePlotById = (req, res) =>{
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Plot.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Plot with id=${id}. Maybe Plot was not found!`
        });
      } else res.send({ message: "Plot was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Plot with id=" + id
      });
    });
}


exports.deletePlotById = (req, res) => {
  const id = req.params.id;
  Plot.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Plot with id=${id}. Maybe Plot was not found!`
        });
      } else {
        res.send({
          message: "Plot was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Plot with id=" + id
      });
    });
};

