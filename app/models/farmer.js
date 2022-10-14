module.exports = mongoose => {
    const AddFarmer = mongoose.model(
        "Farmer",
        mongoose.Schema(
        {
            firstName: String,
            lastName: String,
            farmerId: String,
            clusterCode:String,
            ownerType: String,
            address:String,
            clusterId:String,
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