import express from "express";
import userController from "../controllers/userController.js";
import Validator from "../middleware/validation.js";

const router = express.Router();
router.post(
  "/",
  Validator.newAccountRules(),
  Validator.validateInput,
  userController.createUser
);

export default router;
