import {
  approveLeave,
  rejectLeave,
  getAllLeaveRequests,
  getLeaveStats,
} from "../services/leave.service.js";
export const approve = async (req, res) => {
  try {
    const { id } = req.params;

    const leave = await approveLeave(id);

    res.status(200).json({
      success: true,
      message: "Leave approved successfully.",
      data: leave,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to approve leave.",
    });
  }
};

export const reject = async (req, res) => {
  try {
    const { id } = req.params;
    const { remarks } = req.body;

    const leave = await rejectLeave(id, remarks);

    res.status(200).json({
      success: true,
      message: "Leave rejected successfully.",
      data: leave,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to reject leave.",
    });
  }
};

export const leaveStats = async (req, res) => {
  try {
    const stats = await getLeaveStats();

    res.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch leave statistics.",
    });
  }
};

export const getLeaves = async (req, res) => {
  try {
    const leaves = await getAllLeaveRequests();

    res.status(200).json({
      success: true,
      data: leaves,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch leave requests.",
    });
  }
};
