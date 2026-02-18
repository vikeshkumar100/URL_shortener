import Url from "../models/url.model.js";
import { nanoid } from "nanoid";

export const shortUrl=async (req,res)=>{
    try{
        const {originalUrl}=req.body;
        if(!originalUrl)
            return res.status(400).json({msg:"url is required"});

        let shortId=nanoid(6);
        const result=await Url.create({originalUrl,shortId});
        if(!result)
            return res.status(400).json({msg:"failed to short url",result});

        return res.status(201).json({
            msg:"short url successfully created",
            shortUrl:`http://localhost:8000/${shortId}`,
            result
        })
    }catch(err){
        return res.status(500).json({msg:'Error',error:err.message});
    }
};

export const findurl=async (req,res)=>{
    try{
        const shortId=req.params.id;
        const original=await Url.findOne({shortId});
        if(!original)
            return res.status(404).json({msg:"page not found"});

        const originalurl=original.originalUrl;
        original.visitCount+=1;
        await original.save();
        return res.redirect(originalurl);

    }catch(err){
        return res.status(500).json({msg:"server error",err:err.message});
    }
}

export const showAnalytics=async (req,res)=>{
    try{
        const shortId=req.params.id;
        const result=await Url.findOne({shortId});
        if(!result)
            return res.status(404).json({msg:"url not found"});
        
        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({msg:"server error",err:err.message});
    }
}
export const showAllAnalytics=async (req,res)=>{
    try{
        const result=await Url.find();
        if(result.length<1)
            return res.status(404).json({msg:"url not found"});
        return res.status(200).json(result);

    }catch(err){
        return res.status(500).json({msg:"server error",err:err.message});
    }
}