const DeviceDescription = require("./device_description").DeviceDescription;
class Device {
    constructor(device,name,admin){
        this.id = device;
        this.description = new DeviceDescription(name,admin);
    }
}

module.exports.Device = Device;