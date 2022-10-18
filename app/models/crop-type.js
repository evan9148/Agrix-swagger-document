module.exports = moogose =>{
    const CropType=moogose.model(
        'croptype',
        moogose.Schema({
            cropType:String
        },
        {timestamps:true}
        ),
    );
    return CropType;
};