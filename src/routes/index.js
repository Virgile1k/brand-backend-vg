import express from "express";
import blogRoutes from "./blogRoutes.js";
import userRoutes from "./userRoutes.js";
import loginRoutes from "./loginRoutes.js";

const router = express.Router();

router.use("/blog", blogRoutes);
router.use("/user", userRoutes);
router.use("/login", loginRoutes);

export default router;
