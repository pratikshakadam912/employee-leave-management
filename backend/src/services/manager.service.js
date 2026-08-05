import prisma from "../config/prisma.js";

export const getManagerDashboard = async () => {
  // Total Employees
  const totalEmployees = await prisma.user.count({
    where: {
      role: "EMPLOYEE",
    },
  });

  // Total Leave Requests
  const totalLeaves = await prisma.leave.count();

  // Pending
  const pendingLeaves = await prisma.leave.count({
    where: {
      status: "PENDING",
    },
  });

  // Approved
  const approvedLeaves = await prisma.leave.count({
    where: {
      status: "APPROVED",
    },
  });

  // Rejected
  const rejectedLeaves = await prisma.leave.count({
    where: {
      status: "REJECTED",
    },
  });

  // Latest Leave Requests
  const recentLeaves = await prisma.leave.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 8,

    include: {
      employee: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  return {
    totalEmployees,
    totalLeaves,
    pendingLeaves,
    approvedLeaves,
    rejectedLeaves,
    recentLeaves,
  };
};
