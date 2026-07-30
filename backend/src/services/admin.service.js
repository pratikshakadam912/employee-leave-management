import prisma from "../config/prisma.js";

import { hashPassword, comparePassword } from "../utils/hashPassword.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async ({ username, password }) => {
  // Validation
  if (!username || !password) {
    throw new Error("Username and Password are required.");
  }

  if (username.length < 4) {
    throw new Error("Username must be at least 4 characters.");
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  // Check existing user
  const existingUser = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (existingUser) {
    throw new Error("Username already exists.");
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create employee
  const user = await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      role: "EMPLOYEE",
    },
  });

  // JWT
  const token = generateToken(user);

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
  };
};

export const loginUser = async ({ username, password }) => {
  if (!username || !password) {
    throw new Error("Username and Password are required.");
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    throw new Error("Invalid credentials.");
  }

  const valid = await comparePassword(password, user.password);

  if (!valid) {
    throw new Error("Invalid credentials.");
  }

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
  };
};
