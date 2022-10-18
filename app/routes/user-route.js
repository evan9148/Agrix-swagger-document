<<<<<<< HEAD

const { authJwt } = require("../middleware");
const user = require("../controller/user-controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", user.allAccess);


  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    user.adminBoard
  );
};
=======
module.exports = app =>{
    const user=require('../controller/user-controller')
    var router=require('express').Router();

    router.post('/',user.createUser);

    app.use('/api/user',router);
}
>>>>>>> c388917189cd254d3e7146c3ec6d8f80d4259684
