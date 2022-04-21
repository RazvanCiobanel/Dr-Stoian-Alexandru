const express = require("express");
const activities = require("../data/activities.json");

const router = express.Router();

router.get("/:id&:language", (req, res) => {
  const id  = req.params.id;
  const language  = req.params.language;
  const activity = activities.find(
    (item) => item.id === id && item.language === language
  );
  res.send(activity);
});

module.exports = router;
