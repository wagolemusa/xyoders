import express from  'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const allpostRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories")
const jobRoute = require("./routes/jobs")
const multer = require("multer")
const path = require("path")
import consola from "consola";
const cloudinary = require("./utils/cloudinary");

// Import Application Constants
import { DB, PORT} from "./constants";

const app = express()
dotenv.config()
app.use(cors());
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(express.static(path.join(__dirname,"./bill/build","index.html")))
app.use(express.static(path.join(__dirname, "uploads")))

app.use(express.json({limit: "50mb" }));
app.use(express.urlencoded({ limit: '50mb', extended: true}))

const main = async () => {
  try {
    // Connect with the database
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    consola.success("DATABASE CONNECTED...");
    // Start application listening for request on server
    app.listen(PORT, () => consola.success(`Sever started on port ${PORT}`));
  } catch (err) {
    consola.error(`Unable to start the server \n${err.message}`);
  }
};

main();



app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/jobs", jobRoute)
// app.use("/")

app.get("*",(req, res) =>{
  res.sendFile(path.join(__dirname,"./bill/build/index.html"))
})