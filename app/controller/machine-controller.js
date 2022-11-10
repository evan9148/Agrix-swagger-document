const db = require("../models");
const Machine = db.machine;

// Add Machine
exports.addMachine = async(req,res) => {
  var value = 1
  var code = req.body.implementCode
  var d = await Machine.find({implementCode: code+value});

  while (d.length>0){
    value+=1
    d = await Machine.find({implementCode: code+value});
  }
  code+=value

  const machine = new Machine ({
    implementCode: code,
    ownerShip: req.body.ownerShip,
    implementType: req.body.implementType,
    implementCategory: req.body.implementCategory,
    HorsePower: req.body.HorsePower,
    WheelDrive: req.body.WheelDrive,
    machineBrand: req.body.machineBrand,
    model: req.body.model,
    cluster: req.body.cluster,
    clusterCode: req.body.clusterCode,
    implementIdentifier: req.body.implementIdentifier,
    imieNo: req.body.imieNo,
    simNo: req.body.simNo,
    simType: req.body.simType
  });

    machine
        .save()
        .then(data =>{
            res.send(data);
            console.log(data);
        })
        .catch(error =>{
            res.status(500).send({
                message:
                    error.message || "some error occurred while creating the machine"
            });
        });
}



// Get Machine
exports.getMachine = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);

    const skip = (page -1) * size;

    const total = await Machine.countDocuments();
    const machine = await Machine.find().skip(skip).limit(size);

    res.json({
        machine,
        total,
        page, 
        size
    });
  } catch(error) {
      console.log(error)
      res.status(400).json(error)
  }
}



// Edit/update machine Id
exports.updateMachineById = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Machine.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update machine with id=${id}. Maybe machine was not found!`
        });
      } else res.send({ message: "machine was updated successfully."});
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating machine with id=" + err
      });
    });
};


// delete api for machine...!
exports.deleteMachineById = (req, res) => {
  const id = req.params.id;
  Machine.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete machine with id=${id}. Maybe machine was not found!`
        });
      } else {
        res.send({
          message: "machine was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete machine with id =" + err
      });
    });
};
