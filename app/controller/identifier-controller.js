const db = require("../models");
const Identifier = db.identifier;


// get Identifier...
exports.getIdentifier = (req, res) => {
    const firstName = req.params.firstName;
    Identifier.find({firstName: firstName})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Identifier with firstName" + firstName });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Identifier" + err });
      });
};
  


// add Identifier...
exports.addIdentifier = (req,res) => {
  const identifier = new Identifier({
      firstName: req.body.firstName,
      name: req.body.name,
  });

  identifier
      .save()
      .then(data => {
          res.send(data);
          console.log(data)
      })
      .catch(error => {
          res.status(500).send({
              message:
                  error.message || "some error occurred while creating the Identifier"
          });
      });
}