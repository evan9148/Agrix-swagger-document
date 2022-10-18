const db = require("../models");
const Cluster = db.cluster;


// Get Cluster
exports.cluster = (req, res) => {
    const clusterCode = req.query.clusterCode;
    var condition = clusterCode ? { clusterCode: { $regex: new RegExp(clusterCode), $options: "i" } } : {};
    Cluster.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving cluster Code."
            });
        });
}

// Add Cluster
exports.addCluster = (req, res) => {
    // console.log({clusterName:req.body.clusterName})
    const cluster = new Cluster({
        clusterName: req.body.clusterName,
        clusterCode: req.body.clusterCode,
        clusterManager: req.body.clusterManager,
        village: req.body.village,
        district: req.body.district,
        state: req.body.state,
        officeAddress: req.body.officeAddress,
        contactDetail: req.body.contactDetail,
        customerState: req.body.customerState,
        sales: req.body.sales,
        purchase: req.body.purchase,
        expenditure:req.body.expenditure,
        hrBasicDetails:req.body.hrBasicDetails,
        leadDetails:req.body.leadDetails
  
    });
    console.log(cluster);
    cluster
        .save(cluster)
        .then(data => {
          console.log(data);
            res.send(data);
<<<<<<< HEAD
=======
            // console.log(data);
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "some error occurred while creating the cluster"
            });
        });

}

exports.clusterById = (req, res) => {
    const id = req.params.id;
    Cluster.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Cluster with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Cluster with id=" + id });
      });
  };


  exports.updateClusterById = (req, res) =>{
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    const id = req.params.id;
    Cluster.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Cluster with id=${id}. Maybe Cluster was not found!`
          });
        } else res.send({ message: "Cluster was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Cluster with id=" + id
        });
      });
  }

  exports.deleteClusterById = (req, res) => {
    const id = req.params.id;
    Cluster.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Cluster with id=${id}. Maybe Cluster was not found!`
          });
        } else {
          res.send({
            message: "Farmer was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Farmer with id=" + id
        });
      });
  };