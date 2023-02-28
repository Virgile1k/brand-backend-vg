import errorMessage from "../utils/errorHandle.js";
import succcessMessage from "../utils/successHandle.js";
import failureMessage from "../utils/failureHandle.js";

const verifyAccess = (requiredRole) => {
  return async (req, res, next) => {
    // console.log(req.user);
    // const { role } = req.user;
    // console.log(role);
    // try {
    //   const { role } = req.user;
    //   if (requiredRole !== role) {
    //     const status = 401;
    //     const failuremsg = `You don't have access on this api`;
    //     return failureMessage(res, status, failuremsg);
    //   }
    //   return next();
    // } catch (error) {
    //   console.log(error);
    //   const errorMsge = error.message;
    //   errorMessage(res, errorMsge);
    // }
  };
};
export default verifyAccess;
