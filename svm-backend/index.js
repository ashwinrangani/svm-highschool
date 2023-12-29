import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/AuthRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();
const { mongo_url, PORT } = process.env;
const app = express();

mongoose
  .connect(mongo_url)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

  app.use(cookieParser());
app.use(express.json());

  app.use(cors({
    origin: ['http://localhost:5173', 'https://rhz016gw-5173.inc1.devtunnels.ms',],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));

console.log("Route file reached");

app.use("/", router);

app.listen(PORT, () => {
  console.log(`app is listening to ${PORT}`);
  
});
