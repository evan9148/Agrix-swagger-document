const db=require("../models");
const Variety = db.variety;


// CreateVariety... 
exports.addVariety = (req,res) => {
    const addvariety = new Variety ({
        cropTypeid: req.body.cropTypeid,
        cropType: req.body.cropType,
        variety: req.body.variety
    });
    
        addvariety
            .save(addvariety)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "some error occurred while creating the variety"
                });
            });
}


// All varieties..
exports.variety = (req,res) => {
    Variety.find({})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found variety"});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving variety" + err});
        });
}


// get api for variety according to croptype..
exports.getBycroptype = async (req,res) => {
    const cropType = req.params.cropType;
    Variety.findOne(cropType)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found variety by = cropType" + cropType });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving variety" + err });
      });
}