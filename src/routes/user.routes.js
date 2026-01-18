import { Router } from "express";
import { getUsers, createUser } from "../controller/user.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { verifyJwt } from "../middlewares/jwt.middleware.js";

const router = Router();
router.get('/get-users', verifyJwt, asyncHandler(getUsers));
router.post('/create-user', verifyJwt, asyncHandler(createUser)); // Assuming admin only or authenticated creation
export default router;
