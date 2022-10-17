const { application } = require("express");
const { authJwt } = require("../middleware");

module.exports = app =>{
    const common = require("../controller/common.controller");
    var router = require("express").Router();

    router.get("/",[authJwt.verifyToken,authJwt.isAdmin],common.countData);

    app.use('/api/dashboard',router);
};