import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import userRoutes from './routes/user.js'; 
import dotenv from "dotenv"

const MONGOURI="mongodb://localhost:27017/memories?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const app = express();
dotenv.config()

// Body Parsers
app.use(bodyParser.json({limit:"30mb",extended:"true"}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}))
app.use(cors());


// Method For Connecting to Your db And this func return promises
const PORT=process.env.PORT || 5000
mongoose.connect(process.env.MONGOURI,{useNewUrlParser:"true",useUnifiedTopology:"true"})
.then(()=> app.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`)
}))
.catch((error)=>{
    console.log(error.message)
})



// Connecting Routes
app.use("/posts",postRoutes);
app.use("/" ,userRoutes ); 