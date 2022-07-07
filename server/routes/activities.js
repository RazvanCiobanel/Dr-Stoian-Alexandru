import { Router } from "express";
import { getDb } from "../db/conn.js";

const router = Router();

router.get("/:id&:language", (req, res) => {
  let db_connect = getDb();
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

export default router;
