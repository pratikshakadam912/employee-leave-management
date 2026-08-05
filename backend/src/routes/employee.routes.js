import express from "express";

import { dashboard, createLeave } from "../controllers/employee.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import upload from "../middleware/upload.middleware.js";
const router = express.Router();

// Employee Dashboard
router.get("/dashboard", protect, authorize("EMPLOYEE"), dashboard);
router.post(
  "/apply-leave",
  protect,
  authorize("EMPLOYEE"),
  upload.single("document"),
  createLeave,
);

export default router;
