module.exports = mongoose =>{
    const implementType = mongoose.model(
        "implementType",
        mongoose.Schema(
            {
                name: String,
                implementTypeidentifier: String
            },
            {timestamps:true}
        )
    );
    return implementType;
};