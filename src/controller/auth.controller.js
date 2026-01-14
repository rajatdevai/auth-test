import {authMiddleware} from '../middlewares/auth.middleware.js';
import bcrypt from 'bcrypt';
export const registerUser=(req,res,next)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const hashedPassword=bcrypt.hash(password,10);
        const user={email,hashedPassword};
        req.user=user;
        next();
    } catch (error) {
        return next(error);
    }
}
export const loginUser=(req,res,next)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const decryptedPassword=bcrypt.compare(password,req.user.hashedPassword);
        if(!decryptedPassword){
            return res.status(401).json({message:"Invalid credentials"});
        }
        next();
    } catch (error) {
        return next(error);
    }
}   