const express = require("express");
const certifications = require("../data/certifications.json");

const router = express.Router();

router.get("/:language", (req, res) => {
  const { language } = req.params;
  const certification = certifications.find(
    (item) => item.language === language
  );
  res.send(certification);
});

module.exports = router;
