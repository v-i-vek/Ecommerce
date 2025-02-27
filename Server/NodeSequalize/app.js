import express from "express";
import  {testConnection}  from "./db.js";



const app = express()
await testConnection()




app.listen(8888,()=>{console.log("server is running on port 8888");
})