export const fetchUsers= async()=>{
    return [
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },                  
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
       
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"
        },
        {
            name:"rajat",
            age:22,
            email:"rajat@gmail.com"}]}

            export const newUser=async(req ,res,next)=>{
                try {
                    const {name,age,email}=req.body;
                if(!name || !age || !email){
                    return res.status(400).json({message:"All fields are required"});
                }


                const user= await newUser(req.body);
                return res.status(201).json(user);  
            } catch (error) {
                return next(error);     
            }       }