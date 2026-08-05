import { getManagerService } from "../services/manager.service.js";

export const dashboard = async (req, res) => {
  try {
    const data = await getmanagerDashboard();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard.",
    });
  }
};
