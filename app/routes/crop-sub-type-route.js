module.exports = app =>{
    const cropsubtype=require('../controller/crop-sub-type-controller')
    var router=require('express').Router();

    router.post('/',cropsubtype.addCropSubType);
    router.get('/',cropsubtype.getCropSubType);

    app.use('/api/cropsubtype',router);
}