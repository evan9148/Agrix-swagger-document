// module.exports = mongoose => {
//     const variety = mongoose.model(
//         "Variety",
//         mongoose.Schema(
//             {   
//                 cropTypeid: String,
//                 cropType: String,
//                 variety: String
//             },
//             { timestamps: true }
//         )
//     );
//     return variety;
// };


module.exports = mongoose => {
    const variety = mongoose.model(
        "Variety",
        mongoose.Schema(
            {   
                name: String,
                shortName: String,
                cropId: { type: mongoose.Schema.Types.ObjectId, ref: "croptype"}
            },
            { timestamps: true }
        )
    );
    return variety;
};