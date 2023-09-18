import express from "express"
import postRoute from "../api/routes/postRoute/posts.js"
import authRoute from "../api/routes/authRoute/Auth.route.js"
import userRoute from "../api/routes/authUser/users.route.js"
import cors  from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import multer from "multer"






const app=express()

dotenv.config()
//for sending data to db
app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
app.use(express.json())
app.use(cookieParser())
// ../client/public/uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })
const upload = multer({  storage })


app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file
    res.status(200).send(file.filename)
    
  })
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)
app.use("/api/users",userRoute)

app.listen(5000,()=>{
    console.log("Cnnonnected!")
})