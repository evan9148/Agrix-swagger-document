module.exports = mongoose =>{
    const state = mongoose.model(
        "State",
        mongoose.Schema(
            {
<<<<<<< HEAD
                state:String,
                id:String
=======
                state: String,
                id: String
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
            },
            {timestamps:true}
        )
    );
    return state;
};