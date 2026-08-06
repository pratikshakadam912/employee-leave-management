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

export const getAllEmployees = async () => {
  const employees = await prisma.user.findMany({
    where: {
      role: "EMPLOYEE",
    },

    include: {
      leaves: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return employees.map((emp) => {
    const approvedLeaves = emp.leaves.filter(
      (leave) => leave.status === "APPROVED",
    ).length;

    const pendingLeaves = emp.leaves.filter(
      (leave) => leave.status === "PENDING",
    ).length;

    return {
      id: emp.id,
      username: emp.username,
      role: emp.role,
      createdAt: emp.createdAt,

      totalLeaves: emp.leaves.length,

      approvedLeaves,

      pendingLeaves,

      leaveBalance: 20 - approvedLeaves,

      status: pendingLeaves > 0 ? "On Leave" : "Active",
    };
  });
};
