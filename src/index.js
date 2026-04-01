// require(`dotenv`).config({path:'./env'})

//import mongoose from "mongoose";
//import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});
console.log("ENV CHECK:", process.env.MONGODB_URI);
connectDB();



// function connectDB(){
// }
// connectDB()
//import express from "express"
// const a00 = express()
// ;(async() =>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/$
//             {DB_NAME}`)
//             application.on("error",(error) =>{
//                 console.log("ERROR: ", error);
//                 throw error
//             })
//             application.listen(process.env.PORT,() =>{
//                 console.log(`app is listnening on port 
//                     ${process.env.PORT}`)
//             })
//     } catch (error) {
//         console.log("ERROR : ", error)
//         throw err
//     }
// })()
// //