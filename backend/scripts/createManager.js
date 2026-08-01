import prisma from "../src/config/prisma.js";
import bcrypt from "bcrypt";

async function createManager() {
  try {
    const existing = await prisma.user.findUnique({
      where: {
        username: "manager",
      },
    });

    if (existing) {
      console.log("✅ Manager already exists.");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("manager123", 10);

    await prisma.user.create({
      data: {
        username: "manager",
        password: hashedPassword,
        role: "MANAGER",
      },
    });

    console.log("🎉 Manager created successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

createManager();
