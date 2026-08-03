import {
  getEmployeeDashboard,
  applyLeave,
} from "../services/employee.service.js";

export const dashboard = async (req, res) => {
  try {
    const data = await getEmployeeDashboard(req.user.id);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load dashboard.",
    });
  }
};

export const createLeave = async (req, res) => {
  try {
    const leave = await applyLeave(req.user.id, {
      ...req.body,
      document: req.file?.path || null,
    });

    res.status(201).json({
      success: true,
      message: "Leave applied successfully.",
      data: leave,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to apply leave.",
    });
  }
};
