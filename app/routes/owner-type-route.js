<<<<<<< HEAD
const authJwt = require('../middleware/authJwt');

=======
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
 module.exports = app =>{
    const ownertype=require('../controller/owner-type-controller');
    var router=require("express").Router();

<<<<<<< HEAD
    router.get('/',[authJwt.verifyToken,authJwt.isAdmin],ownertype.getOwnerType);
    router.post('/',[authJwt.verifyToken,authJwt.isAdmin],ownertype.addOwnerType);
=======
    router.get('/',ownertype.getOwnerType);
    router.post('/',ownertype.addOwnerType);
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
    
    app.use('/api/ownertype',router);
 }