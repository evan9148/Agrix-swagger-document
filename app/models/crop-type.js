// module.exports = moogose =>{
//     const CropType=moogose.model(
//         'croptype',
//         moogose.Schema({
//             cropType:String
//         },
//         {timestamps:true}
//         ),
//     );
//     return CropType;
// };

module.exports = moogose =>{
    const CropType=moogose.model(
        'croptype',
        moogose.Schema({
            name:String,
            shortName:String
        },
        {timestamps:true}
        ),
    );
    return CropType;
};