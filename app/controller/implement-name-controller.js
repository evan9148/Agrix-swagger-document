const db = require("../models");
const ImplementName = db.implementName;


// get implementType..
exports.getImplementName = (req, res) => {
  ImplementName.find()
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found" });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving ImplementType" + err });
      });
  };
  
  
// add Implementype...
exports.addImplementName = (req,res) =>{
  const Implementname = new ImplementName({
        name: req.body.name,
        shortName: req.body.shortName
  });

  Implementname
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