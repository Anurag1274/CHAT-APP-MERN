import jwt, { decode } from "jsonwebtoken"
import User from "../models/user.models.js";

const  protectRoute = async (req, res, next) => {

    try {

        const token = req.cookies.jwt;

        if(!token)
        {
            return res.status(401).json({error: "Unautharized"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded)
        {
            return res.status(401).json({error: "Unautharized - Invalid Token "});
        }            

        const user = await User.findById(decoded.userId)

        req.user = user;

        next();

    } catch (error) {
        
        console.log("Error in protected Route ", error.message);
        res.status(500).json({error: "Internal Server Error"});


    }

}

export default protectRoute;