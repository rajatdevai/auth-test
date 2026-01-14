import { Router } from "express";
import {getUsers} from "../controller/user.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validateuser } from "../middlewares/validateUser.middleware.js";
import { newUser } from "../services/user.service.js";

const router = Router();
router.get('/get-users', asyncHandler(getUsers));
router.post('/create-user', asyncHandler(newUser));
export default router;
