module.exports = app =>{
    const state=require('../controller/state-controller');
    var router=require("express").Router();

    router.get("/",state.getState);
    router.post("/",state.addState);

    app.use('/api/state',router);
};