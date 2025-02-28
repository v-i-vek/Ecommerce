import { Router } from "express";
const mainRoute = Router()
import userRoutes from './user.js'
console.log('hello')


mainRoute.use("/user",userRoutes)

export default mainRoute
