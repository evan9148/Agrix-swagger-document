<<<<<<< HEAD
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  









=======
const db=require("../models")
const User=db.user;

// Create User
exports.createUser =  (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        mobileNumber:req.body.mobileNumber,
        location:req.body.location,
        salt:req.body.salt,
        emailVerificationId:req.body.emailVerificationId,
        emailVerificationExpiry:req.body.emailVerificationExpiry,
        role:req.body.role,
        otp:req.body.otp,
        emailVerified:req.body.emailVerified,
        mobileNumberVerfied:req.body.mobileNumberVerfied
    });

    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "some error occurred while creating the user"
            });
        });

}
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
