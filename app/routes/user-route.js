module.exports = app =>{
    const user=require('../controller/user-controller')
    var router=require('express').Router();

    router.post('/',user.createUser);

    app.use('/api/user',router);
}