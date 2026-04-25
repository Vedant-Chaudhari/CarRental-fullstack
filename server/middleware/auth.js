// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// export const protect = async (req, res, next)=>{
//     const token = req.headers.authorization;
//     if(!token){
//         return res.json({success: false, message: "not authorized"})
//     }
//     try {
//         const userId = jwt.decode(token, process.env.JWT_SECRET)

//         if(!userId){
//             return res.json({success: false, message: "not authorized"})
//         }
//         req.user = await User.findById(userId).select("-password")
//         next();
//     } catch (error) {
//         return res.json({success: false, message: "not authorized"})
//     }
// }


import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const protect = async (req, res, next) => {
    const token = req.headers.authorization
    if(!token){
        return res.json({success: false, message: "not authorized"})
    }
    try {
        // Fix 1: verify instead of decode
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded){
            return res.json({success: false, message: "not authorized"})
        }

        // Fix 2: use decoded.id
        req.user = await User.findById(decoded.id).select("-password")
        next()
    } catch (error) {
        return res.json({success: false, message: "not authorized"})
    }
}