import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    isDeleted: {
      type: Boolean,
      default: false,
    }
},{timestamps:true})
export const usermodel=mongoose.model('User',userSchema);
