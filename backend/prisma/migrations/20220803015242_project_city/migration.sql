/*
  Warnings:

  - You are about to drop the column `city_id` on the `units` table. All the data in the column will be lost.
  - Added the required column `city_id` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `units` DROP FOREIGN KEY `units_city_id_fkey`;

-- AlterTable
ALTER TABLE `projects` ADD COLUMN `city_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `units` DROP COLUMN `city_id`;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `cities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
