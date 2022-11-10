module.exports=mongoose => {
    const Machine = mongoose.model(
        "machine",
        mongoose.Schema(
            {
                implementCode: { type: String,unique: true,required: true },
                ownerShip: String,
                implementType: { type: mongoose.Schema.Types.String, $ref: "implement-type"},
                implementCategory: { type: mongoose.Schema.Types.String, $ref: "category"},
                HorsePower: { type: mongoose.Schema.Types.String, $ref: "machine-hp"},
                WheelDrive: String,
                machineBrand: { type: mongoose.Schema.Types.String, $ref: "machine-brand"},
                model: String,
                cluster: String,
                clusterCode: { type: mongoose.Schema.Types.String, $ref: "cluster"},
                implementIdentifier: { type: mongoose.Schema.Types.String, $ref: "Implement-identifier"},
                imieNo: Number,
                simNo: String,
                simType: String
            },
            {timestamps:true}
        )
    );
    return Machine;
};