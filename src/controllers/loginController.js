import User from "../models/User.js";
import TokenAuth from "../helpers/authToken.js";
import bcrypt from "bcrypt";
import errorMessage from "../utils/errorHandle.js";
import succcessMessage from "../utils/successHandle.js";
import failureMessage from "../utils/failureHandle.js";

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    //find user with the email
    const user = await User.findOne({ email });
    if (!user) {
      const status = 401;
      const failuremsg = `Invalid email or Passowrd`;

      failureMessage(res, status, failuremsg);
    } else {
      //check password
      const compareHashPassword = bcrypt.compareSync(password, user.password);
      if (!compareHashPassword) {
        const status = 401;
        const failuremsg = `Invalid email or Passowrd`;

        failureMessage(res, status, failuremsg);
      } else {
        const status = 200;
        const token = TokenAuth.generateToken({
          role: user.role,
          fullName: user.fullName,
        });
        console.log(token);
        const msge = ` user successfully logged in`;
        const data = {
          token: token,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
        };
        return succcessMessage(res, status, msge, data);
      }
    }
  } catch (error) {
    const errorMsge = error.message;
    errorMessage(res, errorMsge);
  }
};

export default loginController;
