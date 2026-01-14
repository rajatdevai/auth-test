export const validateuser= (req, res, next)=>{
    try {
        const {name, email, age} = req.body;
        if(!name || !email || !age){
            return res.status(400).json({message:"All fields are required"});
        }
        next();
    } catch (error) {
        return next(error);
    }
}