import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const env = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/auth_backend",
    jwtSecret: process.env.JWT_SECRET || 'your_super_secret_key_change_this_in_prod'
};

export const connectDB = async () => {
    try {
        await mongoose.connect(env.mongoUri);
        console.log("DB CONNECTED");
    } catch (error) {
        console.log("DB CONNECTION ERROR", error);
        process.exit(1);
    }
};

