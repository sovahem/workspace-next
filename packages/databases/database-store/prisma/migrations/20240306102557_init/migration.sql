/*
  Warnings:

  - Added the required column `announcement_1` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `announcement_2` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner_desk` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner_mob` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `facebook` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instagram` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo_2` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message_1` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message_2` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `privacy_policy` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refund_policy` to the `Layout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terms_of_service` to the `Layout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Layout" ADD COLUMN     "announcement_1" TEXT NOT NULL,
ADD COLUMN     "announcement_2" TEXT NOT NULL,
ADD COLUMN     "banner_desk" TEXT NOT NULL,
ADD COLUMN     "banner_mob" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "facebook" TEXT NOT NULL,
ADD COLUMN     "instagram" TEXT NOT NULL,
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "logo_2" TEXT NOT NULL,
ADD COLUMN     "message_1" TEXT NOT NULL,
ADD COLUMN     "message_2" TEXT NOT NULL,
ADD COLUMN     "privacy_policy" TEXT NOT NULL,
ADD COLUMN     "refund_policy" TEXT NOT NULL,
ADD COLUMN     "terms_of_service" TEXT NOT NULL;
