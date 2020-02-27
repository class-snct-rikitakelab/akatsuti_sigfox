const Collection = require("./collection").Collection

class DeviceCollection extends Collection{
    constructor(collection){
        super(collection);
    }
    hasDevice(deviceID){
        return this.collection.doc(deviceID).get()
            .then((snapshot)=>{
                console.log(deviceID+" exists: "+snapshot.exists);
                return snapshot.exists;
            });
    }
    getDeviceDocument(deviceID){
        return this.collection.doc(deviceID).get();
    }
    post(device){
        return this.collection.doc(device.id).set(device.description.serialize());
    }
}


module.exports.DeviceCollection = DeviceCollection;

