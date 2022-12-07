const db = require("../models");
const Plot = db.plot;

// Get All Plot Details...
exports.plot = (req,res) =>{
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


// Add Plot
exports.addPlot =  (req, res) => {
  const id = req.body._id;
    const plot = new Plot({
        farmerId:req.body.farmerId,
        location: req.body.location,
        state:req.body.state,
        village: req.body.village,
        district: req.body.district,
        latitude: req.body.latitude,
        long:req.body.long,
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


exports.plotsByFarmerId = (req,res) => {
  const farmerId = { $regex: ".*" + req.params.farmerId + ".*" , $options: "i" };
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
  const id = { $regex: ".*" + req.params.id + ".*" , $options: "i" };
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


//Get PlotList By Page and FarmerId..
exports.plotListByPage = async (req, res) => {
  try {
    const farmerId = { $regex: ".*" + req.params.farmerId + ".*" , $options: "i" };
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const skip = (page - 1) * size;
    const plot = await Plot.find({'farmerId':farmerId}).sort([['createdAt','desc']]).skip(skip).limit(size);
    res.json({
      plot,
      page,
      size,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};


// count the plot by farmerId.. 
exports.plotCountByFarmerId = (req, res) => {
  const farmerId = { $regex: ".*" + req.params.farmerId + ".*" , $options: "i" };
  Plot.find(farmerId)
    .then((plotList) => {
      if (!plotList) {
        res
          .status(404)
          .send({ message: "Not found Farmer plot with id" + farmerId });
      } else if (plotList) {
        plotCount = plotList.length;
        console.log("plotCount", plotCount);
        res.json({
          plotList,
          plotCount,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Farmer plot with id=" + farmerId });
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
        message: "Error updating Plot with id =" + id
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

