module.exports = mongoose =>{
    const state = mongoose.model(
        "State",
        mongoose.Schema(
            {
                state:String
            },
            {timestamps:true}
        )
    );
    return state;
};