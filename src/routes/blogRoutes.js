import express from "express";
import blogController from "../controllers/blogController.js";

import verifyAccess from "../middleware/verifyAccess.js";

const router = express.Router();
router.post("/", verifyAccess, blogController.createBlog);
router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getOneBlog);
router.patch("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

export default router;
