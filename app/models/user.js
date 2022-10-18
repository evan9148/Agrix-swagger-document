module.exports = mongoose =>{
    const User =mongoose.model(
<<<<<<< HEAD
        "Agrix-User",
        mongoose.Schema(
            {
                username:String,
                email:String,
                password:String,
                roles: [
                    {
                      type: mongoose.Schema.Types.ObjectId,
                      ref: "Role"
                    }
                  ]
=======
        "User-agri",
        mongoose.Schema(
            {
                firstName:String,
                lastName:String,
                email:String,
                password:String,
                mobileNumber:String,
                location:String,
                salt:String,
                emailVerificationId:String,
                emailVerificationExpiry:Number,
                role:String,
                otp:String,
                emailVerified:Boolean,
                mobileNumberVerified:Boolean
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
            },
            {timestamps:true}
        )
    );
    return User;
}