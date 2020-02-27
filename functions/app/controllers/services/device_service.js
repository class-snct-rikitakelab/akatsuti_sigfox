const Device = require("../../models/domain/Device").Device;

class DeviceService{
    constructor(collection){
        this.collection = collection;
    }
    async get(){
        var data={};
        await this.collection.readAll()
        .then((snapshot)=>{
            snapshot.forEach((doc)=>{
                data[doc.id]=doc.data();                
            });
            return data;
        })
        return data;
    }
    async getDevice(deviceID){
        return this.collection.getDeviceDocument(deviceID)
            .then((doc)=>{
                if(doc.exists){
                    return doc.data();
                } else {
                    throw new Error(deviceID + " is not exists")
                }
            });
    }
    async post(deviceID,name,admin){
        const device = new Device(deviceID,name,admin);
        console.log(device);
        return this.collection.post(device)

    }

    async hasDevice(deviceID){
        return await this.collection.hasDevice(deviceID);
    }

}

module.exports.DeviceService = DeviceService;