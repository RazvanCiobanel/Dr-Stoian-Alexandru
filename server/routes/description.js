const express = require("express");
const description = require("../data/description.json");

const router = express.Router();

router.get("/:language", (req, res) => {
  const { language } = req.params;  
  const descr = description.find(
    (item) => item.language === language
  );
  res.send(descr);
});

module.exports = router;
