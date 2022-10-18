module.exports = mongoose =>{
    const state = mongoose.model(
        "State",
        mongoose.Schema(
            {
<<<<<<< HEAD
<<<<<<< HEAD
                state:String,
                id:String
=======
                state: String,
                id: String
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
=======
                name:String,
                shortName:String
>>>>>>> feature/auth
            },
            {timestamps:true}
        )
    );
    return state;
};