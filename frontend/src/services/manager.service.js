import axios from "../utils/axios";

export const getManagerDashboard = async () => {
  const response = await axios.get("/manager/dashboard");
  return response.data;
};

export const getLeaveStats = async () => {
  const response = await axios.get("/manager/leave-stats");
  return response.data;
};

export const getAllLeaves = async () => {
  const response = await axios.get("/manager/leaves");
  return response.data;
};

export const approveLeave = async (leaveId) => {
  const response = await axios.patch(`/leave/approve/${leaveId}`);
  return response.data;
};

export const rejectLeave = async (leaveId, remarks) => {
  const response = await axios.patch(`/leave/reject/${leaveId}`, {
    remarks,
  });

  return response.data;
};
