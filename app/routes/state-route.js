
const { authJwt } = require("../middleware");
module.exports = app =>{
    const state=require('../controller/state-controller');
    var router=require("express").Router();

    router.get("/",[authJwt.verifyToken, authJwt.isAdmin],state.getState);
    router.post("/",[authJwt.verifyToken,authJwt.isAdmin],state.addState);

    app.use('/api/state',router);
};