import express from "express";
import blogController from "../controllers/blogController.js";

const router = express.Router();

router.post("/", blogController.createBlog);

export default router;
