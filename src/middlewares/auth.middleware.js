import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

//for user authentication
export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "User access denied !",
      });
    }

    console.log("Got the Token: ", token);

    const decoded = jwt.verify(token, process.env.SECRET);
    console.log("\ndecoded:", decoded);

    if (!decoded) {
      return res.status(500).json({
        success: false,
        message: "Not a valid User",
      });
    }

    //then attach data to req
    req.user = await User.findOne({ _id: decoded.id }).select("-password");
    console.log("user attached to the request", req.user);

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
    });
  }
};
