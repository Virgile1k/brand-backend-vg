import errorMessage from "../utils/errorHandle.js";
import succcessMessage from "../utils/successHandle.js";
import failureMessage from "../utils/failureHandle.js";
import TokenAuth from "../helpers/authToken.js";

const verifyAccess = (req, res, next) => {
  const token = req.header("x-auth-token");
  console.log(token);
  //cheque if the request has an authorization header
  if (!token) {
    res.status(401).json({
      message: "no token provided",
    });
  } else {
    //check idf token is valid

    try {
      const payload = TokenAuth.decodeToken(token);
      const { message } = payload;
      if (!payload) {
        return res.status(401).json({
          message: "unauthorized, invalid token",
        });
      }
      next();
    } catch (error) {
      console.log(error);
      res.status(404).json({
        message: error,
      });
    }
  }
};

export default verifyAccess;
