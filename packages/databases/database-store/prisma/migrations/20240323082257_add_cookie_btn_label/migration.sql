-- AlterTable
ALTER TABLE "Layout" ADD COLUMN     "consent_confirm_label" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "consent_reject_label" TEXT NOT NULL DEFAULT '';
