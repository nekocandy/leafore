/*
  Warnings:

  - Added the required column `image` to the `Deeds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deeds" ADD COLUMN     "image" TEXT NOT NULL;
