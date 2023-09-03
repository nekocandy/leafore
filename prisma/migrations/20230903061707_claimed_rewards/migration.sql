/*
  Warnings:

  - You are about to drop the column `deedId` on the `DeedRewards` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "DeedRewards" DROP CONSTRAINT "DeedRewards_deedId_fkey";

-- AlterTable
ALTER TABLE "DeedRewards" DROP COLUMN "deedId";

-- CreateTable
CREATE TABLE "DeedRewardsClaimed" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rewardId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeedRewardsClaimed_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DeedRewardsClaimed_id_key" ON "DeedRewardsClaimed"("id");

-- AddForeignKey
ALTER TABLE "DeedRewardsClaimed" ADD CONSTRAINT "DeedRewardsClaimed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeedRewardsClaimed" ADD CONSTRAINT "DeedRewardsClaimed_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "DeedRewards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
