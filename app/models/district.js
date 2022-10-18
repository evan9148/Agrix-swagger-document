module.exports = mongoose => {
    const district = mongoose.model(
        "District",
        mongoose.Schema(
            {   
                state: String,
                district: String,
                stateId:String
            },
            { timestamps: true }
        )
    );
    return district;
};