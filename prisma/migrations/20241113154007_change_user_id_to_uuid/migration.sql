/*
  Warnings:

  - You are about to drop the column `userId` on the `PageView` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PageView" DROP COLUMN "userId",
ADD COLUMN     "uuid" TEXT;
