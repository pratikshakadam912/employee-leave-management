import express from "express";
import { dashboard } from "../controllers/manager.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/dashboard", protect, authorize("Manager"), dashboard);

export default router;
