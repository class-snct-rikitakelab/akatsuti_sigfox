const uuid4 = require("uuid/v4");


class Collection{
    constructor(collection){
        this.collection = collection;
    }
    readAll(){
        console.log("read All")
        return this.collection.get();
    }

    post(data){
        console.log(data.serialize())
        return this.collection.doc(uuid4()).set(data.serialize());
    }

}
module.exports.Collection = Collection;