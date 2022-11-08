module.exports = mongoose =>{
    const Category = mongoose.model(
        "Category",
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
    return Category;
};