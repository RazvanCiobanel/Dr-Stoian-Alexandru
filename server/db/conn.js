import { MongoClient } from "mongodb";
import Db from "./ATLAS_URI.js";

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

export function connectToServer(callback) {
  client.connect(function (err, db) {
    if (db) {
      _db = db.db("drStoian");
      console.log("Successfully connected to MongoDB.");
    }
    return callback(err);
  });
}
export function getDb() {
  return _db;
}
