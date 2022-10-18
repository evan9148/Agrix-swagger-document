
const { authJwt } = require("../middleware");
module.exports = app =>{
    const state=require('../controller/state-controller');
    var router=require("express").Router();

<<<<<<< HEAD
    router.get("/",[authJwt.verifyToken, authJwt.isAdmin],state.getState);
    router.post("/",[authJwt.verifyToken,authJwt.isAdmin],state.addState);
=======
    // router.get("/",[authJwt.verifyToken, authJwt.isAdmin],state.getState);
    // router.post("/",[authJwt.verifyToken,authJwt.isAdmin],state.addState);

    router.post("/",[authJwt.verifyToken,authJwt.isAdmin],state.addState);
    router.get("/",[authJwt.verifyToken,authJwt.isAdmin],state.getState);
    router.get("/:_id",[authJwt.verifyToken,authJwt.isAdmin],state.getStateById)
>>>>>>> feature/auth

    app.use('/api/state',router);
};