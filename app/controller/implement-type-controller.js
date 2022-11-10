const db = require("../models");
const ImplementType = db.implementType;


// get implementType..
exports.getImplementType = (req, res) => {
    // const Name = req.params.Name;
    ImplementType.find()
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
exports.addImplementType = (req,res) =>{
  const Implementype = new ImplementType({
        name: req.body.name,
        implementTypeidentifier: req.body.implementTypeidentifier
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