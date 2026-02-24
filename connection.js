import mongoose from "mongoose";

const connectDb=async (url)=>{
    try{
        await mongoose.connect(url);
        console.log(`Db connected`);
    }catch(err){
        console.log(`Db connection failed ,error : ${err}`);
    }
}

export default connectDb;