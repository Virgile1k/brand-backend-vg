// import TokenAuth from "../helpers/authToken.js";

// import UserModel from "../models/User.js";

// export const verifyUserToken = async (req, res, next) => {
//   try {
//     const token =
//       req.header("auth-token") ||
//       req.params["auth-token"] ||
//       req.body.token ||
//       req.query["auth-token"];
//     if (!token) {
//       return res.status(404).json({
//         message: "token not provided",
//       });
//     }
//     const payload = TokenAuth.decodeToken(token);
//     const { name } = payload;
//     if (name === "JsonWebTokenError") {
//       return res.status(404).json({
//         message: "unauthorized, invalid token",
//       });
//     } else if (name === "TokenExpiredError") {
//       return res.status(404).json({
//         message: "Token expired, invalid token",
//       });
//     }

//     const user = await UserModel.findOne({ _id: payload?.user?._id }).select(
//       "-password"
//     );

//     if (!user) {
//       res.status(404).json({
//         message: "user with that token not exist",
//       });
//     }

//     req.user = user;
//     req.token = token;
//     req.body.user = user._id;
//     return next();
//   } catch (error) {
//     return res.status(404).json({
//       message: error,
//     });
//   }
// };
// export default verifyUserToken;
