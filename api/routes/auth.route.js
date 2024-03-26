import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";

const router = express.Router();


router.get('/auth/signup',signup);
router.get('/auth/login',login);
router.get('/auth/logout',logout);

export default router;
