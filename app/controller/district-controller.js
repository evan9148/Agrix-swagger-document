const db = require("../models");
const District = db.district;
<<<<<<< HEAD
=======
const State = db.state;
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684

// post api for district...
exports.addDistrict = (req,res) => {
    const district = new District({
<<<<<<< HEAD
        stateId: req.body.stateId,
        state: req.body.state,
        district: req.body.district
=======
        district: req.body.district,
        districtId: req.body.districtId,
        stateId: req.body.stateId,
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
    })

    district
        .save()
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.status(404).json({
                error: "might missed while posting your data",error
            })
        })
}


// get api for state...
exports.getDistrict = (req,res) => {
    District.find({})
<<<<<<< HEAD
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found District"});
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving District" + err});
    });
=======
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found District"});
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving District" + err});
      });
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
}


// get api for district according to given state...
exports.getDistrictByState = (req,res) => {
<<<<<<< HEAD
    const state = req.params.state;
    District.findOne({state})
=======
    const state = req.params.stateId;
    District.find({state})
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found state by district" , state });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving district" + err });
      });
}
