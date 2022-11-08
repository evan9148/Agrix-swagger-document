const db = require("../models");
const Machine = db.machine;
const Counter = db.counter;


// Add Driver
exports.addMachine = (req,res) => {
  Counter.findOneAndUpdate(
    {id: "autoval"},
    {"$inc": {"sequence": 1}},
    {new:true},(err,updatedval) => {
      let sequenceId;
      if (updatedval == null){
        const newval = new Counter({
          id: "autoval",
          sequence: 1
        })
        newval.save()
        sequenceId=1
      }else{
        sequenceId = updatedval.sequence
      }

      const machine = new Machine ({
        implementCode: req.body.implementCode,sequenceId,
        implementType: req.body.implementType,
        implementCategory: req.body.implementCategory,
        HP: req.body.HP,
        WD: req.body.WD,
        make: req.body.make,
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
    }
  )
    .then(data =>{
        res.send(data);
        console.log(data)
    })
    .catch(error =>{
        res.status(500).send({
            message:
                error.message || "some error occurred while creating the machine"
        });
    });
}



// Get Machine
exports.getMachine = (req, res) => {
  const {page,limit} = req.query
  if (page <= 0){
      res.status(400).json({
          error : `page number not found ${page}`
      })
  }
  Machine.find()
    .limit(limit*1)
    .skip((page - 1) * limit)
  .then(data => {
    res.status(200).json(
      // message: data.length
      //     ? `Found ${data.length} results for the searched term`
      //     : `Found nothing`,
      data
    )
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving machine" + err
    });
  });
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
