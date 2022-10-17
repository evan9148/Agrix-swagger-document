module.exports = mongoose => {
    const variety = mongoose.model(
        "Variety",
        mongoose.Schema(
            {   
                cropTypeid: String,
                cropType: String,
                variety: String
            },
            { timestamps: true }
        )
    );
    return variety;
};