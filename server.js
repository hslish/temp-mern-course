import "express-async-errors";
import express from "express";
const app = express();
import morgan from "morgan";
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import cookieParser from "cookie-parser";


app.use(cookieParser());
app.use(express.json());

import cloudinary from "cloudinary";


// routers
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js"
import userRouter from "./routes/userRouter.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import  {authenticateUser}  from "./middleware/authMiddleware.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/dist")));


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.json({ message: "data received", data: req.body });
});
// test
app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});
// CRUD
app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.use(express.static(path.resolve(__dirname, "./client/dist")));

// 404 - resource not found

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

// error handling - existing router

//app.use((err, req, res, next) => {
  //console.log(err);
  //res.status(500).json({ msg: "something went wrong" });
//});

app.use(errorHandlerMiddleware);

// port
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
