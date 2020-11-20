import express from "express";
import http from "http";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config";
import JobRouter from './api/routes/job.router';

const app = express();

mongoose
  .connect(config.mongoose.uri, { useNewUrlParser: true })
  .catch((err) => console.error(err));

mongoose.Promise = global.Promise;

// App Setup
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Welcome!"));
app.use("/jobs", JobRouter);

app.use((err, req, res, next) => {
  console.log("Error:", err.message);
  res.status(422).json(err.message);
});

// Server Setup
const port = process.env.PORT || 8000;
http.createServer(app).listen(port, () => {
  console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`);
});
