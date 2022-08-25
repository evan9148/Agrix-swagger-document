const db=require("../models");
const Driver = db.driver;


// Get Driver Details
exports.getDriver =(req,res) =>{
    const driverId = req.query.driverId;
    Driver.find(driverId)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Driver with id " + driverId });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Driver with id=" + driverId });
      });
  }

// Add Driver
exports.addDriver = (req,res) =>{
    const driver=new Driver({
        driverId:req.body.driverId,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        contactDetails:req.body.contactDetails,
        village:req.body.village,
        district:req.body.district,
        state:req.body.state
    });

    driver
        .save(driver)
        .then(data =>{
            res.send(data);
            console.log(data)
        })
        .catch(error =>{
            res.status(500).send({
                message:
                    error.message || "some error occurred while creating the driver"
            });
        });
}


// Get DriverById
exports.driverById =(res,req) =>{
    const id=req.params.id;
    Driver.findById(id)
        .then(data=>{
            if (!data) 
                res.status(404).send({message:"Not found Driver with id" +id});
            else res.send(data) 
        })
        .catch(error =>{
            res 
                .status(500)
                .send({messsage:"Error retrieving Driver with id" +id});
        });
};