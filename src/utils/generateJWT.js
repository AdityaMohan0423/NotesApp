//the jwt authentication.
import jwt from "jsonwebtoken";

export const generateJWT = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email }, // payload
    process.env.SECRET, //secret
    { expiresIn: process.env.EXPIRE } // expiresIn
  );
};
