import mongoose from "mongoose";
const postiveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    age: {
        type: Number,
        required: true
    },
    childAge: {
        type: Number,
        required: true
    },
    phone:{
        type:Number,
        required:false,
        default:'0000000000',
        
    },
    location: {
        type: String,
        required: true
    },
    comeFrom: {
        type: String,
        required: true
    },
    otherDetails:{
        type:String,
        required:false,
        default:'No Connection'
    }
}, { timestamps: true }
)
export default postiveSchema