import { Router } from "express";
import { getDb } from "../db/conn.js";

const router = Router();

router.get("/:language", (req, res) => {
  let db_connect = getDb();
  const { language } = req.params;
  db_connect
    .collection("titles")
    .findOne({ language: language }, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

export default router;
