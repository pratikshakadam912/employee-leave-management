/*
  Warnings:

  - Added the required column `leaveType` to the `Leave` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."LeaveType" AS ENUM ('CASUAL', 'SICK', 'ANNUAL', 'UNPAID');

-- AlterTable
ALTER TABLE "public"."Leave" ADD COLUMN     "leaveType" "public"."LeaveType" NOT NULL;
