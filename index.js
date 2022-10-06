import express from "express";
import db from "./config/database.js";
import dotenv from "dotenv/config";
import route from "./routes/index.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use("/api", route);

app.listen(process.env.PORT, () =>
  console.log("Server is running at port " + process.env.PORT)
);

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.log("Not connect to Database.");
}
