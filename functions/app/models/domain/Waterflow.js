const Serializable = require("./Serializable").Serializable
class Waterflow extends Serializable{
    constructor(hex_data){
        super();
        this.waterflow = Math.round(Buffer.from(hex_data,'hex').readFloatLE()*100)/100;
    }
}

module.exports.Waterflow = Waterflow