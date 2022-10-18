<<<<<<< HEAD
<<<<<<< HEAD
const { authJwt } = require('../middleware');

=======
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
=======
const { authJwt } = require('../middleware');

>>>>>>> feature/auth
module.exports = app =>{
    const cropsubtype=require('../controller/crop-sub-type-controller')
    var router=require('express').Router();

<<<<<<< HEAD
<<<<<<< HEAD
    router.post('/',[authJwt.verifyToken,authJwt.isAdmin],cropsubtype.addCropSubType);
    router.get('/',[authJwt.verifyToken,authJwt.isAdmin],cropsubtype.getCropSubType);
=======
    router.post('/',cropsubtype.addCropSubType);
    router.get('/',cropsubtype.getCropSubType);
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
=======
    router.post('/',[authJwt.verifyToken,authJwt.isAdmin],cropsubtype.addCropSubType);
    router.get('/',[authJwt.verifyToken,authJwt.isAdmin],cropsubtype.getCropSubType);
>>>>>>> feature/auth

    app.use('/api/cropsubtype',router);
}