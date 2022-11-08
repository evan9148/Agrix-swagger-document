module.exports = mongoose =>{
    const implementType = mongoose.model(
        "implementType",
        mongoose.Schema(
            {
                name: {
                    type: String,
                    unique: true,
                    required: true
                }
            },
            {timestamps:true}
        )
    );
    return implementType;
};