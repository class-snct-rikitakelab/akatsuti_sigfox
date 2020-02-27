const Serializable = require("./Serializable").Serializable

class DeviceDescription extends Serializable{
    constructor (name,admin){
        super();
        this.name = name;
        this.admin = admin;
    }
}

module.exports.DeviceDescription = DeviceDescription;