const express = require('express');
const router = express.Router();
const DataRoute = require("./data_route").DataRoute;
const DeviceRoute = require("./device_route").DeviceRoute;

const serviceAccount = require("../../../red-soil-sigfox-firebase-adminsdk-8fy8t-0d63a7f28c.json");
const FirebaseRepository = require("../../models/repositories/RedSoilSigfox");

const DataCollection = require("../../models/repositories/data_collection").DataCollection;
const DataService  = require("../services/data_service").DataService;
const DeviceCollection = require("../../models/repositories/device_collection").DeviceCollection;
const DeviceService = require("../services/device_service").DeviceService;
const repository = new FirebaseRepository.RedSoilSigfoxRepository(serviceAccount)
// deviceの依存関係
const deviceRepository = repository.firestore.collection('device');
const deviceCollection = new DeviceCollection(deviceRepository);
const deviceService = new DeviceService(deviceCollection);
const deviceRouter = new DeviceRoute(express.Router(),deviceService);
// data の依存関係
const dataRepository = repository.firestore.collection('data');
const dataCollection = new DataCollection(dataRepository);
const dataService = new DataService(dataCollection,deviceService);
const dataRouter = new DataRoute(express.Router(),dataService);



/* GET home page. */
router.get('/', (req, res, next) => {
  res.render("index",{title:"沈砂池管理システム",data:[]});
});

router.use('/data',dataRouter.router);
router.use('/device',deviceRouter.router);
router.get('/debug',(req,res,next)=>{
  res.render("json",{data:"hello"});
});
module.exports = router;
