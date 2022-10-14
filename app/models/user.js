module.exports = mongoose =>{
    const User =mongoose.model(
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
            },
            {timestamps:true}
        )
    );
    return User;
}