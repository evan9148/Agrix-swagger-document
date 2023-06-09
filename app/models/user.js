module.exports = mongoose =>{
    const User =mongoose.model(

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
            },
            {timestamps:true}
        )
    );
    return User;
}