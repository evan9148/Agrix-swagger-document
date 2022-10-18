module.exports = mongoose => {
    const district = mongoose.model(
        "District",
        mongoose.Schema(
<<<<<<< HEAD
            {   
                state: String,
                district: String,
                stateId:String
=======
            {  
                // {_id:"", district : "",shortName:"", stateid : _id from state}
                district: String,
                districtId: String,
                stateId: [{ type: mongoose.Schema.Types.ObjectId, ref: "state"}],
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
            },
            { timestamps: true }
        )
    );
    return district;
};