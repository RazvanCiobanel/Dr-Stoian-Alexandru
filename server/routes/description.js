const express = require("express");
const dbo = require("../db/conn");

const router = express.Router();

router.get("/:language", (req, res) => {
  let db_connect = dbo.getDb();
  const { language } = req.params;
  db_connect
    .collection("description")
    .findOne({ language: language }, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = router;
