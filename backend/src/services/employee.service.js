import prisma from "../config/prisma.js";

export const getEmployeeDashboard = async (employeeId) => {
  // Total Leaves
  const totalLeaves = await prisma.leave.count({
    where: {
      employeeId,
    },
  });

  // Approved Leaves
  const approvedLeaves = await prisma.leave.count({
    where: {
      employeeId,
      status: "APPROVED",
    },
  });

  // Pending Leaves
  const pendingLeaves = await prisma.leave.count({
    where: {
      employeeId,
      status: "PENDING",
    },
  });

  // Rejected Leaves
  const rejectedLeaves = await prisma.leave.count({
    where: {
      employeeId,
      status: "REJECTED",
    },
  });

  // Recent Leave Requests
  const recentLeaves = await prisma.leave.findMany({
    where: {
      employeeId,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
    select: {
      id: true,
      leaveType: true,
      reason: true,
      startDate: true,
      endDate: true,
      status: true,
      createdAt: true,
      document: true,
    },
  });

  return {
    totalLeaves,
    approvedLeaves,
    pendingLeaves,
    rejectedLeaves,
    recentLeaves,
  };
};

export const applyLeave = async (
  employeeId,
  { leaveType, reason, startDate, endDate, document },
) => {
  console.log("========== SERVICE: APPLY LEAVE ==========");
  console.log({
    employeeId,
    leaveType,
    reason,
    startDate,
    endDate,
    document,
    documentType: typeof document,
  });

  const leave = await prisma.leave.create({
    data: {
      leaveType,
      reason,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      document: typeof document === "string" ? document : null,
      employeeId,
    },
  });

  return leave;
};
export const getEmployeeLeaveHistory = async (userId) => {
  return await prisma.leave.findMany({
    where: {
      employeeId: userId,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getEmployeeNotifications = async (userId) => {
  return await prisma.notification.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getEmployeeProfile = async (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      username: true,
      role: true,
      createdAt: true,
    },
  });
};

export const updateEmployeeProfile = async (userId, data) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      username: data.username,
    },
  });
};
