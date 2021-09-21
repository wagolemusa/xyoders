import express from  'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

// import postRoutes from './routes/posts.js'

const app = express()
dotenv.config()

app.use(express.json())


const CONNECTION_URL = "mongodb+srv://refuge:djrefuge@12@cluster0.gvhev.mongodb.net/givy?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () =>console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))
mongoose.set('useFindAndModify', false)

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// app.use("/")