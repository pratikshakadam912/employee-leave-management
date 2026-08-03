import axios from "../utils/axios";

export const getDashboardData = async () => {
  const response = await axios.get("/employee/dashboard");

  return response.data;
};
