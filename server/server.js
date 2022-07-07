import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToServer } from "./db/conn.js";
import titlesRoute from "./routes/titles.js";
import activityRoutes from "./routes/activities.js";
import certificationsRoutes from "./routes/certifications.js";
import descriptionRoutes from "./routes/description.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/titles", titlesRoute);
app.use("/activities", activityRoutes);
app.use("/certifications", certificationsRoutes);
app.use("/description", descriptionRoutes);

app.listen(PORT, () => {
  connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(
    `Server running on port: http://localhost:${PORT}`
  );
});
