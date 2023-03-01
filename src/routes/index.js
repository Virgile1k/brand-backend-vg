import express from "express";
import blogRoutes from "./blogRoutes.js";
import userRoutes from "./userRoutes.js";
import loginRoutes from "./loginRoutes.js";
import commentRoute from "./commentRoute.js";
import messageRoute from "./messageRoutes.js";

const router = express.Router();

router.use("/blog", blogRoutes);
router.use("/user", userRoutes);
router.use("/login", loginRoutes);
router.use("/comment", commentRoute);
router.use("/message", messageRoute);
export default router;
