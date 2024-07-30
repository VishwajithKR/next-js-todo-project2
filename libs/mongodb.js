import mongoose from "mongoose";


export const  connectMonogDB= async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_DB);
        console.log("connect to mongodb")
    } catch (error) {
        console.log(error)
    }
}