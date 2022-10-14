 module.exports = app =>{
    const ownertype=require('../controller/owner-type-controller');
    var router=require("express").Router();

    router.get('/',ownertype.getOwnerType);
    router.post('/',ownertype.addOwnerType);
    
    app.use('/api/ownertype',router);
 }