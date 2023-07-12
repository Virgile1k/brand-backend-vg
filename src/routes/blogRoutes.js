import express from "express";
import blogController from "../controllers/blogController.js";
// import verifyAccess from "../middleware/verifyAccess.js";
import Validator from "../middleware/validation.js";

const router = express.Router();
router.post(
  "/",
  Validator.newBlogRules(),
  Validator.validateInput,
  blogController.createBlog
);
router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getOneBlog);
router.patch("/:id",  blogController.updateBlog);
router.delete("/:id",blogController.deleteBlog);

export default router;
