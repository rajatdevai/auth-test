import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const connectDB = async()=>{
    try {
           await mongoose.connect(process.env.MONGO_URI,{
            
           }).then(()=>console.log("DB CONNECTED"));
           console.log("DB CONNECTED");
        
    } catch (error) {
        console.log("DB CONNECTION ERROR",error);
        process.exit(1);
    }
}

