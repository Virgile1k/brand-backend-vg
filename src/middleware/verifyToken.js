import TokenAuth from "../helpers/authToken.js";

import User from "../models/User.js";

const verifyUserToken = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    //if token doesn't exist
    if (!token) {
      return res.status(404).json({ error: "no token provided" });
    }
    //cheque if token is valid
    const payload = TokenAuth.decodeToken(token);
    const { name } = payload;
    if (name === "JsonWebTokenError") {
      return res.status(404).json({
        message: "unauthorized, invalid token",
      });
    } else if (name === "TokenExpiredError") {
      return res.status(404).json({
        message: "token expired, invalid token",
      });
    }

    const user = await User.findOne({ _id: payload?.User?._id }).select(
      "-password"
    );
    if (!user) {
      return res.status(404).json({
        message: `user from token not exist, invalid token`,
      });
    }

    req.user = user;
    req.token = token;
    req.body.user = user._id;
    return next();
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: `failed to verify token`,
    });
  }
};

export default verifyUserToken;
