-- AlterTable
ALTER TABLE "Layout" ADD COLUMN     "consent_cookie_label_link" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "consent_cookie_text" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "consent_cookie_title" TEXT NOT NULL DEFAULT '';
