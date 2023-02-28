import express from "express";
import blogController from "../controllers/blogController.js";
import verifyToken from "../middleware/verifyToken.js";
import verifyAccess from "../middleware/verifyAccess.js";

const router = express.Router();

router.post("/", verifyToken, blogController.createBlog);
router.get("/", verifyToken, blogController.getAllBlogs);
router.get("/:id", verifyToken, blogController.getOneBlog);
router.patch("/:id", verifyToken, blogController.updateBlog);
router.delete("/:id", verifyToken, blogController.deleteBlog);

export default router;
