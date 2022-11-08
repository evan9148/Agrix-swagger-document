module.exports=mongoose => {
    const alldropdown = mongoose.model(
        "alldropdown",
        mongoose.Schema(
            {
                columnName: String,
                name: String,
            },
            {timestamps:true}
        )
    );
    return alldropdown;
};