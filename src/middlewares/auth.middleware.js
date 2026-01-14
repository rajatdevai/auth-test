export const authMiddleware=(req,res,next)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
      next();
    } catch (error) {
        return next(error);
    }
}