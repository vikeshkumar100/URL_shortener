import express from 'express';
import connectDb from './connection.js';
import urlrouter from './routes/url.routes.js';
import authrouter from './routes/auth.routes.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

const app=express();
const PORT=8000;
dotenv.config();
await connectDb('mongodb://127.0.0.1:27017/UrlShortener');

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authrouter);
app.use('/api/url',urlrouter);

app.get('/',(req,res)=>{
    res.send(`<h1 style="text-align:center;">Vikesh</h1>`);
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})