-- AlterTable
ALTER TABLE "Layout" ALTER COLUMN "privacy_policy" DROP NOT NULL,
ALTER COLUMN "refund_policy" DROP NOT NULL,
ALTER COLUMN "terms_of_service" DROP NOT NULL,
ALTER COLUMN "privacy_policy_label" DROP NOT NULL,
ALTER COLUMN "refund_policy_label" DROP NOT NULL,
ALTER COLUMN "terms_of_service_label" DROP NOT NULL;
