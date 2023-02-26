import express from "express";
import blogController from "../controllers/blogController.js";

const router = express.Router();

router.post("/", blogController.createBlog);
router.get("/", blogController.getAllBlogs);

export default router;
