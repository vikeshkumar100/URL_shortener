import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const registeruser=async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password)
            return res.status(400).json({msg:"all fields are required"});
        let saltRounds=10;
        const hashedPwd=await bcrypt.hash(password,saltRounds);
        const result=await User.create({
            name,
            email,
            password:hashedPwd
        });
        
        if(!result){
            return res.status(400).json({msg:"failed to register user"});
        }
        return res.status(201).json({msg:"user registered successfully"});
    }catch(err){
        return res.status(500).json({msg:"user already exists"});
    }
    
}

export const loginuser=async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password)
            return res.status(400).json({msg:"all fields are required"});

        const user=await User.findOne({email});
        if(!user)
            return res.status(404).json({msg:"user not found"});
        
        const isSame=await bcrypt.compare(password,user.password);
        if(!isSame)
            return res.status(400).json({msg:"wrong password"});

        const secret=process.env.JWT_SECRET;
        const token=jwt.sign({userId:user._id},secret,{expiresIn:"1h"});
        res.cookie("jwt_token",token,{
            httpOnly:true,
            sameSite:"lax"
        });
        return res.status(200).json({msg:"login successful",name:user.name,email:user.email});

    }catch(err){
        return res.status(500).json({msg:"login failed"});
    }
}