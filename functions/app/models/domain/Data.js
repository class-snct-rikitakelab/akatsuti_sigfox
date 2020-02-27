const Serializable = require("./Serializable").Serializable
const Turibidity = require("./Turbidity").Turbidity;
const Waterflow = require("./Waterflow").Waterflow;
class Data extends Serializable{
    constructor(device,rawdata,time){
        super();
        this.device = device;
        this.time = time;
        this.rawdata = rawdata;
        this.turbidity = new Turibidity(this.rawdata.substring(8,16)).turbidity;
        this.waterflow = new Waterflow(this.rawdata.substring(0,8)).waterflow;
    }
}
module.exports.Data = Data;