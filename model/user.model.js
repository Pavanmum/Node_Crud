import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,   
    }
    ,
    summary: {
        type: String,
        required: true,
    },
},{timestamps: true});

export default mongoose.model('User', userSchema)