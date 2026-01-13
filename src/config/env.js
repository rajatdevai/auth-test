import dotenv from "dotenv";
dotenv.config();

export const env={
    port:process.env.PORT,
    nodeEnv:process.env.NODE_ENV,
}