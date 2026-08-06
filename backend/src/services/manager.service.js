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

export const getReportsData = async () => {
  // Total employees
  const totalEmployees = await prisma.user.count({
    where: {
      role: "EMPLOYEE",
    },
  });

  // Leave counts
  const totalLeaves = await prisma.leave.count();

  const approvedLeaves = await prisma.leave.count({
    where: {
      status: "APPROVED",
    },
  });

  const pendingLeaves = await prisma.leave.count({
    where: {
      status: "PENDING",
    },
  });

  const rejectedLeaves = await prisma.leave.count({
    where: {
      status: "REJECTED",
    },
  });

  // Leave Type Distribution
  const casualLeaves = await prisma.leave.count({
    where: {
      leaveType: "CASUAL",
    },
  });

  const sickLeaves = await prisma.leave.count({
    where: {
      leaveType: "SICK",
    },
  });

  const annualLeaves = await prisma.leave.count({
    where: {
      leaveType: "ANNUAL",
    },
  });

  const unpaidLeaves = await prisma.leave.count({
    where: {
      leaveType: "UNPAID",
    },
  });

  // Monthly Leave Trend (Current Year)
  const currentYear = new Date().getFullYear();

  const monthly = [];

  for (let month = 0; month < 12; month++) {
    const start = new Date(currentYear, month, 1);

    const end = new Date(currentYear, month + 1, 1);

    const count = await prisma.leave.count({
      where: {
        createdAt: {
          gte: start,
          lt: end,
        },
      },
    });

    monthly.push({
      month: start.toLocaleString("default", {
        month: "short",
      }),
      leaves: count,
    });
  }

  // Department Statistics
  const departments = ["Development", "HR", "Marketing", "Finance"];

  const departmentStats = await Promise.all(
    departments.map(async (department) => {
      const count = await prisma.user.count({
        where: {
          role: "EMPLOYEE",
          department,
        },
      });

      return {
        department,
        employees: count,
      };
    }),
  );

  // Top Employees
  const employees = await prisma.user.findMany({
    where: {
      role: "EMPLOYEE",
    },

    include: {
      leaves: true,
    },
  });

  const topEmployees = employees
    .map((emp) => ({
      id: emp.id,
      username: emp.username,
      totalLeaves: emp.leaves.length,
      approvedLeaves: emp.leaves.filter((leave) => leave.status === "APPROVED")
        .length,
    }))
    .sort((a, b) => b.approvedLeaves - a.approvedLeaves)
    .slice(0, 5);

  return {
    stats: {
      totalEmployees,
      totalLeaves,
      approvedLeaves,
      pendingLeaves,
      rejectedLeaves,
    },

    leaveTrend: monthly,

    leaveTypes: [
      {
        name: "Casual",
        value: casualLeaves,
      },
      {
        name: "Sick",
        value: sickLeaves,
      },
      {
        name: "Annual",
        value: annualLeaves,
      },
      {
        name: "Unpaid",
        value: unpaidLeaves,
      },
    ],

    departments: departmentStats,

    topEmployees,
  };
};

export const getDepartmentReport = async () => {
  const employees = await prisma.user.findMany({
    where: {
      role: "EMPLOYEE",
    },
    include: {
      leaves: true,
    },
  });

  const departments = {};

  employees.forEach((emp) => {
    // Until you add a department field in User model
    const department = "Development";

    if (!departments[department]) {
      departments[department] = 0;
    }

    departments[department] += emp.leaves.length;
  });

  return Object.entries(departments).map(([dept, leaves]) => ({
    dept,
    leaves,
  }));
};
