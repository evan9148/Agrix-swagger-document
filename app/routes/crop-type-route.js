<<<<<<< HEAD
const { authJwt } = require('../middleware');

=======
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
module.exports = app =>{
    const croptype=require('../controller/crop-type-controller')
    var router=require('express').Router();

<<<<<<< HEAD
    router.post('/',[authJwt.verifyToken,authJwt.isAdmin],croptype.addCropType);
    router.get('/',[authJwt.verifyToken,authJwt.isAdmin],croptype.getCropType);
=======
    router.post('/',croptype.addCropType);
    router.get('/',croptype.getCropType);
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684

    app.use('/api/croptype',router);
}