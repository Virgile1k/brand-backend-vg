import express from "express";
import userController from "../controllers/userController.js";
import Validator from "../middleware/validation.js";
import verifyAccess from "../middleware/verifyAccess.js";

const router = express.Router();
router.post(
  "/",
  Validator.newAccountRules(),
  Validator.validateInput,
  userController.createUser
);
router.get("/all", userController.getAllUser);
router.get("/:id", verifyAccess, userController.getOneUser);
router.delete("/:id", verifyAccess, userController.deleteUser);

export default router;
