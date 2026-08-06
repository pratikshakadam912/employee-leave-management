import {
  getManagerDashboard,
  getAllEmployees,
  getReportsData,
} from "../services/manager.service.js";

export const dashboard = async (req, res) => {
  try {
    const data = await getManagerDashboard();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch manager dashboard.",
    });
  }
};

export const employees = async (req, res) => {
  try {
    const data = await getAllEmployees();

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch employees",
    });
  }
};
export const reports = async (req, res) => {
  try {
    const data = await getReportsData();

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch reports",
    });
  }
};
