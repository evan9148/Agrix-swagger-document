const db=require('../models')
const CropType=db.cropType 

//Get for CropType
exports.getCropType = (req,res) =>{
    const cropType=req.query.CropType;
        CropType.find(cropType)
                .then(data =>{
                    if(!data)
                        res.status(404).send({messsage:"Not found Croptype with id ",cropType});
                    else res.send(data);
                })
                .catch(error =>{
                    res
                        .status(500)
                        .send({messsage:"Error retrieving Owner with id=",cropType})
                });
}

//Add for OwnerType
exports.addCropType = (req,res) =>{
    const croptype=new CropType({
        cropType:req.body.cropType
    });

    croptype
        .save(croptype)
        .then(data=>{
            res.send(data);
        })
        .catch(error =>{
            res.status(500).send({
                messsage:
                    error.messsage || "some error occurred while creating the croptype"
            });
        });
}