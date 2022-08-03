/*
  Warnings:

  - You are about to drop the column `frebruary` on the `month_data` table. All the data in the column will be lost.
  - Added the required column `city_id` to the `units` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `month_data` DROP COLUMN `frebruary`,
    ADD COLUMN `august` DOUBLE NULL,
    ADD COLUMN `february` DOUBLE NULL;

-- AlterTable
ALTER TABLE `units` ADD COLUMN `city_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `users_organizations` ADD CONSTRAINT `users_organizations_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_organizations` ADD CONSTRAINT `users_organizations_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organizations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `units` ADD CONSTRAINT `units_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `cities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
