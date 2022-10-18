<<<<<<< HEAD
<<<<<<< HEAD
const { authJwt } = require('../middleware');
=======
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
=======
const { authJwt } = require('../middleware');
>>>>>>> feature/auth
module.exports = app =>{
    const farmSeason=require('../controller/farm-season-controller');
    var router=require('express').Router();
    
<<<<<<< HEAD
<<<<<<< HEAD
    router.get('/',[authJwt.verifyToken,authJwt.isAdmin],farmSeason.getFarmSeason);
    router.post('/',[authJwt.verifyToken,authJwt.isAdmin],farmSeason.addFarmSeason);
=======
    router.get('/',farmSeason.getFarmSeason);
    router.post('/',farmSeason.addFarmSeason);
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
=======
    router.get('/',[authJwt.verifyToken,authJwt.isAdmin],farmSeason.getFarmSeason);
    router.post('/',[authJwt.verifyToken,authJwt.isAdmin],farmSeason.addFarmSeason);
>>>>>>> feature/auth

    app.use('/api/farmseason',router);
};