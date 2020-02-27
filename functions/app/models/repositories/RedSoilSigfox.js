var admin = require("firebase-admin");
class RedSoilSigfoxRepository{
    constructor(serviceAccount){
    admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    this.firestore = admin.firestore();                
    }
}

module.exports.RedSoilSigfoxRepository = RedSoilSigfoxRepository;