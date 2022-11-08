const db = require("../models");
const ImplementType = db.implementType;


// get implementType..
exports.getImplementType = (req, res) => {
    const firstName = req.params.firstName;
    ImplementType.find({firstName: firstName})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Dropdown with firstName" + firstName });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving ImplementType" + err });
      });
  };
  
  
// add Implementype...
exports.addImplementType = (req,res) =>{
const Implementype = new ImplementType({
    firstName: req.body.firstName,
    name: req.body.name,
});

Implementype
    .save()
    .then(data => {
        res.send(data);
        console.log(data)
    })
    .catch(error => {
        res.status(500).send({
            message:
                error.message || "some error occurred while creating the Implementype"
        });
    });
}