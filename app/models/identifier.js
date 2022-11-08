module.exports = mongoose =>{
    const Identifier = mongoose.model(
        "Identifier",
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
    return Identifier;
};