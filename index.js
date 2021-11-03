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
// import postRoutes from './routes/posts.js'

const app = express()
dotenv.config()
app.use(cors());
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(express.static(path.join(__dirname,"./bill/build","index.html")))

const CONNECTION_URL = "mongodb+srv://refuge:djrefuge@12@cluster0.gvhev.mongodb.net/givy?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
    .then(() => app.listen(PORT, () =>console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))
mongoose.set('useFindAndModify', false)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/jobs", jobRoute)
// app.use("/")

app.get("*",(req, res) =>{
  res.sendFile(path.join(__dirname,"./bill/build/index.html"))
})