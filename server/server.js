const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbo = require("./db/conn");
const titlesRoute = require("./routes/titles.js");
const activityRoutes = require("./routes/activities.js");
const certificationsRoutes = require("./routes/certifications");
const descriptionRoutes = require("./routes/description");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/titles", titlesRoute);
app.use("/activities", activityRoutes);
app.use("/certifications", certificationsRoutes);
app.use("/description", descriptionRoutes);

app.listen(PORT, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(
    `Server running on port: http://localhost:${PORT}`
  );
});
