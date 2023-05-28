import express from "express";
const router = express.Router();

import { register } from "../controllers/userController.js";

// Create Register and Confirm user

// Create new user
router.post("/", register);
router.post("/login", authenticate);

export default router;
