import express from "express";
import userController from "../controllers/userController.js";
import Validator from "../middleware/validation.js";
import DataChecker from "../middleware/dataChecker.js";

const router = express.Router();
router.post(
  "/",
  DataChecker.isFullName,
  Validator.newAccountRules(),
  Validator.validateInput,

  userController.createUser
);
router.get("/all", userController.getAllUser);
router.get("/:id",  userController.getOneUser);
router.delete("/:id",  userController.deleteUser);

export default router;
