const express = require("express");
const dbo = require("../db/conn");

const router = express.Router();

router.get("/:id&:language", (req, res) => {
  let db_connect = dbo.getDb();
  const { id, language } = req.params;
  db_connect
    .collection("activities")
    .findOne(
      { id: id, language: language },
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
});

module.exports = router;
