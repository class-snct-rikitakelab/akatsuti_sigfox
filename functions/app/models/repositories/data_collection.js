const Collection = require("./collection").Collection
class DataCollection extends Collection{
    constructor(collection){
        super(collection);
    }
    getDeviceData(deviceID){
        return this.collection.where('device','==',deviceID).get()
    }
}

module.exports.DataCollection = DataCollection;