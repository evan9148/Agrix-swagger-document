module.exports = mongoose => {
    const AddFarmer = mongoose.model(
        "Farmer",
        mongoose.Schema(
        {
            firstName: String,
            lastName: String,
            farmerId: String,
            ownerType: String,
            address:String,
            farmingSeason: String,
            cropType: String,
            cropSubType:String,
            // plotArea: Number,
        },
        { timestamps: true }
      )
    );
    return AddFarmer;
};