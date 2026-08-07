import {
  getEmployeeDashboard,
  applyLeave,
  getEmployeeLeaveHistory,
  getEmployeeNotifications,
  getEmployeeProfile,
  updateEmployeeProfile,
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
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const leave = await applyLeave(req.user.id, {
      ...req.body,
      document: req.file ? req.file.path : null,
    });

    console.log("DOCUMENT:", req.file?.path);

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
      error: error.message,
    });
  }
};
export const getLeaveHistory = async (req, res) => {
  try {
    const leaves = await getEmployeeLeaveHistory(req.user.id);

    res.status(200).json({
      success: true,
      data: leaves,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch leave history.",
    });
  }
};

export const getNotifications = async (req, res) => {
  try {
    const notifications = await getEmployeeNotifications(req.user.id);

    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch notifications.",
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const profile = await getEmployeeProfile(req.user.id);

    res.json({
      success: true,
      data: profile,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const profile = await updateEmployeeProfile(req.user.id, req.body);

    res.json({
      success: true,
      message: "Profile updated successfully",
      data: profile,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};
