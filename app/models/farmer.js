const { Schema } = require("mongoose");

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
            // clusterId:{type:Schema.Types.ObjectId, ref:"cluster"}, //impliment that wise
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