import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth route working successfully!",
  });
});

export default router;
