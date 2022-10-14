module.exports = app =>{
    const croptype=require('../controller/crop-type-controller')
    var router=require('express').Router();

    router.post('/',croptype.addCropType);
    router.get('/',croptype.getCropType);

    app.use('/api/croptype',router);
}