/*
  Warnings:

  - You are about to drop the column `completeName` on the `User` table. All the data in the column will be lost.
  - Added the required column `LastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."User_completeName_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "completeName",
ADD COLUMN     "LastName" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL;
