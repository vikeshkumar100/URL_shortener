import mongoose from "mongoose";
const urlSchema=mongoose.Schema({
    originalUrl:{
        type:String,
        required:true
    },
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    visitCount:{
        type:Number,
        default:0
    }
},{
    timestamps:true
});

const Url=mongoose.model('Url',urlSchema);
export default Url;