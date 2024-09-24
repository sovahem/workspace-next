-- AlterTable
ALTER TABLE "Layout" ADD COLUMN     "privacy_policy_label" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "refund_policy_label" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "terms_of_service_label" TEXT NOT NULL DEFAULT '';
