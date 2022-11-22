module.exports = mongoose => {
    const AddPlotDetails = mongoose.model(
      "Plot-detail",
      mongoose.Schema(
        {
            farmerId: {type: mongoose.Schema.Types.ObjectId, ref: "farmer"},
            state: {type: mongoose.Schema.Types.ObjectId, ref: "state"},
            location: String,
            village: String,
            district: String,
            latitude: Number,
            long:Number,
            areaOfPlot : String,
            perimeterOfPlot: String,
            plotShape :String,
            soilType : String,
            nutrientContentAnalysis: String,
            waterSource : String,
            plotId:String
        },
        { timestamps: true }
      )
    );
    return AddPlotDetails;
  };