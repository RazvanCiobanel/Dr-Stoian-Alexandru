const express = require("express");
const titles = require("../data/titles.json");

const router = express.Router();

router.get("/:language", (req, res) => {
  const { language } = req.params;
  const title = titles.find(
    (item) => item.language === language
  );
  res.send(title);
});

module.exports = router;
