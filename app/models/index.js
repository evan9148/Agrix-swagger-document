const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.farmMachine = require("./farm-machine")(mongoose);
db.cluster = require("./cluster")(mongoose);
db.farmer = require("./farmer")(mongoose);
db.plot = require("./plot-details")(mongoose);
db.driver = require("./driver")(mongoose);
db.state = require("./state")(mongoose);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> feature/auth
db.district=require("./district")(mongoose)
db.ownerType=require('./owner-type')(mongoose)
db.farmSeason=require('./farm-season')(mongoose);
db.cropType=require('./crop-type')(mongoose);
db.cropSubType=require('./crop-sub-type')(mongoose);
db.variety=require('./variety')(mongoose);
db.user=require('./user')(mongoose);
db.role=require('./role')(mongoose);

db.ROLES=['admin'];
<<<<<<< HEAD
=======
db.district = require("./district")(mongoose)
db.ownerType = require('./owner-type')(mongoose)
db.farmSeason = require('./farm-season')(mongoose);
db.cropType = require('./crop-type')(mongoose);
db.cropSubType = require('./crop-sub-type')(mongoose);
db.variety = require('./variety')(mongoose);
db.user = require('./user')(mongoose);
db.clusterId = require("./clusterId-list")(mongoose);
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
=======
>>>>>>> feature/auth
module.exports = db;