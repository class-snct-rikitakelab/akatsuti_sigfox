class Serializable {
    constructor(){
        
    }
    serialize(){
        return JSON.parse(JSON.stringify(this));
    }
}

module.exports.Serializable = Serializable;