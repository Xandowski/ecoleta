/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `points` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "points_email_key" ON "points"("email");
