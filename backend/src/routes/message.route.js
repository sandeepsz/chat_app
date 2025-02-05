import express from "express";
import { getUsers} from "./../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/users", protectRoute, getUsers);

export default router;