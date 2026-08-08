import express from "express";

import {
  dashboard,
  createLeave,
  getLeaveHistory,
  getNotifications,
  getProfile,
  updateProfile,
} from "../controllers/employee.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

// Employee Dashboard
router.get("/dashboard", protect, authorize("EMPLOYEE"), dashboard);

// Apply Leave
router.post(
  "/apply-leave",
  protect,
  authorize("EMPLOYEE"),
  upload.single("document"),
  createLeave,
);

// Leave History
router.get("/leave-history", protect, authorize("EMPLOYEE"), getLeaveHistory);

// Notifications
router.get("/notifications", protect, authorize("EMPLOYEE"), getNotifications);

// Profile
router.get("/profile", protect, authorize("EMPLOYEE"), getProfile);

// Update Profile
router.put("/profile", protect, authorize("EMPLOYEE"), updateProfile);

export default router;
