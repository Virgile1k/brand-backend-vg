import express from "express";
import messageController from "../controllers/messageController.js";
// import verifyToken from "../middleware/verifyToken.js";
// import verifyAccess from "../middleware/verifyAccess.js";

const router = express.Router();

router.post("/", messageController.postMessage);
router.get("/all", messageController.getAllMessage);

export default router;
