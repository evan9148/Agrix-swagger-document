module.exports=mongoose =>{
    const Machine = mongoose.model(
        "machine",
        mongoose.Schema(
            {
                implementCode: {
                    type: String,
                    unique: true,
                    required: true
                },
                implementType: { type: mongoose.Schema.Types.ObjectId, ref: "implement-type"},
                implementCategory: { type: mongoose.Schema.Types.ObjectId, ref: "implement-category"},
                hp: String,
                wd: String,
                make: String,
                model: String,
                cluster: String,
                clusterCode: { type: mongoose.Schema.Types.ObjectId, ref: "cluster"},
                implementIdentifier: { type: mongoose.Schema.Types.ObjectId, ref: "identifier"},
                imieNo: Number,
                simNo: String,
                simType: String
            },
            {timestamps:true}
        )
    );
    return Machine;
};