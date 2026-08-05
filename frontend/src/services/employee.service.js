import api from "../utils/axios";

// =========================
// Employee Dashboard
// =========================

export const getEmployeeDashboard = async () => {
  const response = await api.get("/employee/dashboard");

  return response.data.data;
};

// Apply Leave

export const applyLeave = async (formData) => {
  const response = await api.post("/employee/apply-leave", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
