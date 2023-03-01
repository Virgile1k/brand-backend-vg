import express from "express";
import commentController from "../controllers/commentController.js";
// import verifyToken from "../middleware/verifyToken.js";
import verifyAccess from "../middleware/verifyAccess.js";

const router = express.Router();

router.post("/:id", commentController.postComment);
router.get("/all", commentController.getAllComment);
router.delete("/:id", commentController.delComment);
export default router;
