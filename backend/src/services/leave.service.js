import prisma from "../config/prisma.js";

export const approveLeave = async (leaveId) => {
  const leave = await prisma.leave.update({
    where: {
      id: leaveId,
    },
    data: {
      status: "APPROVED",
    },
    include: {
      employee: true,
    },
  });

  await prisma.notification.create({
    data: {
      userId: leave.employeeId,
      message: "Your leave request has been approved.",
    },
  });

  return leave;
};

export const rejectLeave = async (leaveId, remarks) => {
  const leave = await prisma.leave.update({
    where: {
      id: leaveId,
    },
    data: {
      status: "REJECTED",
      remarks,
    },
    include: {
      employee: true,
    },
  });

  await prisma.notification.create({
    data: {
      userId: leave.employeeId,
      message: "Your leave request has been rejected.",
    },
  });

  return leave;
};

export const getAllLeaveRequests = async () => {
  return await prisma.leave.findMany({
    include: {
      employee: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getLeaveStats = async () => {
  const pending = await prisma.leave.count({
    where: {
      status: "PENDING",
    },
  });

  const approved = await prisma.leave.count({
    where: {
      status: "APPROVED",
    },
  });

  const rejected = await prisma.leave.count({
    where: {
      status: "REJECTED",
    },
  });

  const onLeave = await prisma.leave.count({
    where: {
      status: "APPROVED",
    },
  });

  return {
    pending,
    approved,
    rejected,
    onLeave,
  };
};
