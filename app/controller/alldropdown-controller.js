const db = require("../models");
const Dropdown = db.dropdown;

// get dropdown..
exports.getDropdown = (req, res) => {
    const column = req.query.column;
    Dropdown.find({columnName: column})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Dropdown with id " + column });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Dropdown plot" + err });
      });
  };
  
  
// add dropdown...
exports.addDropdown = (req,res) => {
const dropdown = new Dropdown({
    columnName: req.body.columnName,
    name: req.body.name
});

dropdown
    .save()
    .then(data =>{
        res.send(data);
        console.log(data)
    })
    .catch(error =>{
        res.status(500).send({
            message:
                error.message || "some error occurred while creating the dropdown"
        });
    });
}