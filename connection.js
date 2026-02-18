import mongoose from "mongoose";

const connectDb=async ()=>{
    try{
    const con=await mongoose.connect('mongodb://127.0.0.1:27017/UrlShortener');
    console.log(`Db connected`);
    }catch(err){
        console.log(`Db connection failed ,error : ${err}`);
    }
}

export default connectDb;