import express from "express";

import { dashboard } from "../controllers/employee.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// Employee Dashboard
router.get("/dashboard", protect, authorize("EMPLOYEE"), dashboard);

export default router;
