module.exports = mongoose =>{
    const Category = mongoose.model(
        "Category",
        mongoose.Schema(
            {
                name: String,
                shortName: String
            },
            {timestamps:true}
        )
    );
    return Category;
};