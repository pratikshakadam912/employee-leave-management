import express from "express";

import {
  dashboard,
  employees,
  reports,
} from "../controllers/manager.controller.js";
import { getLeaves, leaveStats } from "../controllers/leave.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/dashboard", protect, authorize("MANAGER"), dashboard);

router.get("/leave-stats", protect, authorize("MANAGER"), leaveStats);

router.get("/leaves", protect, authorize("MANAGER"), getLeaves);
router.get("/employees", protect, authorize("MANAGER"), employees);
router.get("/reports", reports);

export default router;
