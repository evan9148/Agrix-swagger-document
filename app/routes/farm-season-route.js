module.exports = app =>{
    const farmSeason=require('../controller/farm-season-controller');
    var router=require('express').Router();
    
    router.get('/',farmSeason.getFarmSeason);
    router.post('/',farmSeason.addFarmSeason);

    app.use('/api/farmseason',router);
};