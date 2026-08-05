import express from "express";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

import { approve, reject } from "../controllers/leave.controller.js";

const router = express.Router();

router.patch("/approve/:id", protect, authorize("MANAGER"), approve);

router.patch("/reject/:id", protect, authorize("MANAGER"), reject);

export default router;
