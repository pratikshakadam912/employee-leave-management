import api from "../utils/axios";

// Employee Dashboard
export const getEmployeeDashboard = async () => {
  const response = await api.get("/employee/dashboard");
  return response.data.data;
};

// Apply Leave
export const applyLeave = async (formData) => {
  const response = await api.post("/employee/apply-leave", formData);
  return response.data;
};

// Leave History
export const getLeaveHistory = async () => {
  const response = await api.get("/employee/leave-history");
  return response.data;
};

// Notifications
export const getNotifications = async () => {
  const response = await api.get("/employee/notifications");
  return response.data;
};

// Profile
export const getProfile = async () => {
  const response = await api.get("/employee/profile");
  return response.data;
};

// Update Profile
export const updateProfile = async (data) => {
  const response = await api.put("/employee/profile", data);
  return response.data;
};
