const { application } = require("express");
<<<<<<< HEAD
<<<<<<< HEAD
const { authJwt } = require("../middleware");
=======
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
=======
const { authJwt } = require("../middleware");
>>>>>>> feature/auth

module.exports = app =>{
    const common = require("../controller/common.controller");
    var router = require("express").Router();

<<<<<<< HEAD
<<<<<<< HEAD
    router.get("/",[authJwt.verifyToken,authJwt.isAdmin],common.countData);
=======
    router.get("/",common.countData);
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
=======
    router.get("/",[authJwt.verifyToken,authJwt.isAdmin],common.countData);
>>>>>>> feature/auth

    app.use('/api/dashboard',router);
};