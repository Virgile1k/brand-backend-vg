import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class TokenAuth {
  static generateToken(data) {
    const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "1d" });
    return token;
  }
  static decodeToken(token) {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    return data;
  }
}
export default TokenAuth;
