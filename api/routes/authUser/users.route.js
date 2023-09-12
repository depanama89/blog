import express from "express"
import {addUser} from "../../controllers/user.controller.js"

const router=express.Router()

router.get("/add",addUser)

export default router