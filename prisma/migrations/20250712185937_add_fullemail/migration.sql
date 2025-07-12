/*
  Warnings:

  - A unique constraint covering the columns `[fullemail]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fullemail" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_fullemail_key" ON "User"("fullemail");
