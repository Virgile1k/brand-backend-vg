import express from "express";
import blogController from "../controllers/blogController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", blogController.createBlog);
router.get("/", verifyToken, blogController.getAllBlogs);
router.get("/:id", blogController.getOneBlog);
router.patch("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

export default router;
