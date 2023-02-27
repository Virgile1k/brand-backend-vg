import TokenAuth from "../helpers/authToken.js";
import errorMessage from "../utils/errorHandle.js";
import succcessMessage from "../utils/successHandle.js";
import failureMessage from "../utils/failureHandle.js";

const isUserExist = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    //if token doesn't exist
    if (!token) {
      const status = 404;
      const msge = `no token provided`;

      failureMessage(res, status, msge);
    }
    //cheque if token is valid
    const data = TokenAuth.decodeToken(token);
    if (!data) {
      const status = 404;
      const msge = `invalid token or token expired`;

      failureMessage(res, status, msge);
    }
    // req.user = data.user;

    return next();
  } catch (error) {
    console.log(error);
    const errorMsge = error.message;
    errorMessage(res, errorMsge);
  }
};

export default isUserExist;
