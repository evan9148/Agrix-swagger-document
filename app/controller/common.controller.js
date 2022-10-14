const db=require("../models");
const Farmer=db.farmer;
const Plot=db.plot;
const Cluster=db.cluster;
const FarmMachineHistory=db.farmMachine;

exports.countData  = async (req,res)=>  {
    const response =  {
        farmerStat:0,
        plotStat:0,
        clusterStat:0,
        carmMachineHistoryStat:0
    };
  
    await Farmer.count().then(function (count, err) {
        response.farmerStat = count
    });

    await Plot.count().then(function (count, err) {
        response.plotStat = count
    });

    await Cluster.count().then(function (count, err) {
        response.clusterStat = count
    });

    await FarmMachineHistory.count().then(function (count, err) {
        response.FarmMachineHistoryStat = count
    });
    
    // console.log("conting stat", response);

    res.status(200).send(response);
}