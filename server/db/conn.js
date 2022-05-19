const {MongoClient} = require("mongodb")
const Db = require("./ATLAS_URI")
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

let _db

module.exports = {
    connectToServer: function (callback) {
        client.connect((err, db) =>{
            if (de) {
                _db = db.db("drStoian")
                console.log("Successfully connected to MongoDB.")
            }
            return callback(err)
        })
    },

    getDb: ()=> {
        return _db
    }
}
