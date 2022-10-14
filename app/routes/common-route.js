const { application } = require("express");

module.exports = app =>{
    const common = require("../controller/common.controller");
    var router = require("express").Router();

    router.get("/",common.countData);

    app.use('/api/dashboard',router);
};