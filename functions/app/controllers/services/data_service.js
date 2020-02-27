const Data = require("../../models/domain/Data").Data;

class DataService{

    constructor(collection,deviceService){
        this.collection = collection;// data collection
        this.deviceService = deviceService; // device service
    }
    async get(){
        console.log("data service get called")
        return await this.collection.readAll()
        .then((snapshot)=>{
            const data = {};
            snapshot.forEach((doc)=>{
                data[doc.id]=doc.data();                
            });
            return data;
        })
    }
    async getDevice(deviceID){
        console.log("get(deviceID) called")
        if(!await this.deviceService.hasDevice(deviceID)){
            console.log("device is not exists")
            throw new Error(deviceID + " is not exists")
        }


        return await this.collection.getDeviceData(deviceID)
        .then((snapshot)=>{
            const data = {};
            const turbidityData = [];
            const waterflowData = [];
            snapshot.forEach((doc)=>{
                data[doc.id]=doc.data();                
                waterflowData.push({x:doc.data().time,y:doc.data().waterflow})
                turbidityData.push({x:doc.data().time,y:doc.data().turbidity})
            });
            return {data:data,waterflowData:waterflowData,turbidityData:turbidityData};
        })
        .catch((error)=>{
            return error;
        });
    }


    async post(device,rawdata,time){
        const data = new Data(device,rawdata,time);
        if(! await this.deviceService.hasDevice(device)){
            throw new Error(device + " is not exists")
        }
        return await this.collection.post(data);
             
    }
}

module.exports.DataService = DataService;