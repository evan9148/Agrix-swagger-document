const db = require("../models");
const Category = db.category;


// get Category..
exports.getCategory = (req, res) => {
    const firstName = req.params.firstName;
    Category.find({firstName: firstName})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Category with firstName" + firstName });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Category" + err });
      });
  };
  
  
// add Category...
exports.addCategory = (req,res) =>{
  const Implementcategory = new Category({
      firstName: req.body.firstName,
      name: req.body.name,
  });

  Implementcategory
      .save()
      .then(data => {
          res.send(data);
          console.log(data)
      })
      .catch(error => {
          res.status(500).send({
              message:
                  error.message || "some error occurred while creating the Category"
          });
      });
}