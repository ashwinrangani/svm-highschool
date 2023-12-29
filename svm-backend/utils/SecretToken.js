import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    algorithm: "HS256",
    allowInsecureKeySizes: true,
    expiresIn: 86400,
  });
};

export default createSecretToken;
