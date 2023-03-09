import express from "express";
import userController from "../controllers/userController.js";
import Validator from "../middleware/validation.js";
import verifyAccess from "../middleware/verifyAccess.js";
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
router.get("/:id", verifyAccess, userController.getOneUser);
router.delete("/:id", verifyAccess, userController.deleteUser);

export default router;
