import User from "../models/User.js";

class DataChecker {
  static async isFullName(req, res, next) {
    const user = req.body.fullName;
    if (user == "") {
      return res.status(401).json({
        message: "please provide your name",
      });
    }
    return next();
    // if (!user){
    //     return next();
    // }
    // return res.status(401).json({error:"email already exist"})
  }
}
export default DataChecker;
