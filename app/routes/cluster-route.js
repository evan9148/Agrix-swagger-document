module.exports = app => {
    const cluster = require("../controller/cluster-controller");
    var router = require("express").Router();

    router.post("/addCluster" , cluster.addCluster);
    router.get("/" , cluster.cluster);
    router.get("/:id" , cluster.clusterById);    
    router.put("/:id" , cluster.updateClusterById);    
    router.delete("/:id" , cluster.deleteClusterById);
    
    app.use('/api/cluster', router);
  };
