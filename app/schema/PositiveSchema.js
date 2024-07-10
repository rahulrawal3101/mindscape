import mongoose from "mongoose";
const postiveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    childAge: {
        type: Number,
        required: true
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
        required:true
    }
}, { timestamps: true }
)
export default postiveSchema