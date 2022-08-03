/*
  Warnings:

  - You are about to drop the column `inclination` on the `cities` table. All the data in the column will be lost.
  - Added the required column `inclination` to the `units` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cities` DROP COLUMN `inclination`;

-- AlterTable
ALTER TABLE `units` ADD COLUMN `inclination` INTEGER NOT NULL;
