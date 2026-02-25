import jwt from 'jsonwebtoken';
export const checkAuth=(req,res,next)=>{
    try{
        const token=req.cookies.jwt_token;
        if(!token)
            return res.status(401).json({msg:"login is required"});
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded.userId;
        next();
    }catch(err){
        return res.status(401).json({msg:"login is required"});
    }
}