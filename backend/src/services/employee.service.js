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
  const leave = await prisma.leave.create({
    data: {
      leaveType,
      reason,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      document,
      employeeId,
    },
  });

  return leave;
};
