import { Router } from "express";
import {addUser}  from "../controller/user.controller.js"


const userRoutes = Router()

userRoutes.post('/adduser',addUser)

export default userRoutes


