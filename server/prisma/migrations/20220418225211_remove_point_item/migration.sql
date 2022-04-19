/*
  Warnings:

  - You are about to drop the `point_items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "point_items" DROP CONSTRAINT "point_items_itemId_fkey";

-- DropForeignKey
ALTER TABLE "point_items" DROP CONSTRAINT "point_items_pointId_fkey";

-- AlterTable
ALTER TABLE "items" ADD COLUMN     "pointId" INTEGER;

-- DropTable
DROP TABLE "point_items";

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_pointId_fkey" FOREIGN KEY ("pointId") REFERENCES "points"("id") ON DELETE SET NULL ON UPDATE CASCADE;
