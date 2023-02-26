import express from "express";
import blogRoutes from "./blogRoutes.js";

const router = express.Router();

router.use("/blog", blogRoutes);

export default router;
