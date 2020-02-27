const Serializable = require("./Serializable").Serializable
class Turbidity extends Serializable{
    constructor(hex_data){
        super();
        this.turbidity = Math.round(Buffer.from(hex_data,'hex').readFloatLE()*100)/100;
    }
}

module.exports.Turbidity = Turbidity