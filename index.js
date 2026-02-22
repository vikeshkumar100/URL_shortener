import express from 'express';
import connectDb from './connection.js';
import router from './routes/url.routes.js';

const app=express();
const PORT=8000;
app.use(express.json());
connectDb();

app.use('/',router);

app.get('/',(req,res)=>{
    res.send(`<h1 style="text-align:center;">Vikesh</h1>`);
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})