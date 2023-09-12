import express from "express"
import postRoute from "../api/routes/postRoute/posts.js"
import authRoute from "../api/routes/authRoute/Auth.route.js"
import userRoute from "../api/routes/authUser/users.route.js"
import cors  from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
const app=express()

dotenv.config()
//for sending data to db
app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)
app.use("/api/users",userRoute)

app.listen(8000,()=>{
    console.log("Connected!")
})