import User from "../models/User.js";
import errorMessage from "../utils/errorHandle.js";
import succcessMessage from "../utils/successHandle.js";
import failureMessage from "../utils/failureHandle.js";
import sendFunc from "../utils/mail.js";
import bcrypt from "bcrypt";
class userController {
  static async createUser(req, res) {
    try {
      if (req.body.password !== req.body.repeatPassword) {
        const status = 403;
        const failuremsg = `Password doesn't match`;
        return failureMessage(res, status, failuremsg);
      }

      const hashPassword = bcrypt.hashSync(req.body.password, 10);
      req.body.password = hashPassword;
      const newUser = await User.create(req.body);
      if (!newUser) {
        const status = 404;
        const failuremsg = `user not Created`;

        failureMessage(res, status, failuremsg);
      } else {
        const status = 201;
        const msge = `New user successfully created`;
        const data = sendFunc(newUser);
        succcessMessage(res, status, msge, data);
      }
    } catch (error) {
      if (error.code == 11000) {
        const status = 403;
        const failuremsg = "Email is Arleady Exist";
        return failureMessage(res, status, failuremsg);
      }
      const errorMsge = error.message;
      errorMessage(res, errorMsge);
    }
  }
  static async getAllUser(re, res) {
    try {
      const users = await User.find();
      if (!users) {
        res.status(401).json({
          message: `no user found`,
        });
      }
      return res.status(200).json({
        message: `${users.length} users found`,
        data: users,
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        message: error,
      });
    }
  }
  static async getOneUser(req, res) {
    try {
      const id = req.params._id;
      const user = await User.findOne(id);
      if (!user) {
        res.status(404).json({
          message: `user with id ${user.id} not found`,
        });
      } else {
        return res.status(200).json({
          message: `user successfuly retrieved`,
          data: user,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({
        message: error,
      });
    }
  }
  static async deleteUser(req, res) {
    try {
      const id = req.params._id;
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        res.status(404).json({
          message: "user not successfully deleted",
        });
      }
      return res.status(200).json({
        message: `user successfully deleted`,
        data: user,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        message: error,
      });
    }
  }
}

export default userController;
