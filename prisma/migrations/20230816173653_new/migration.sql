/*
  Warnings:

  - You are about to drop the column `expires` on the `auth_keys` table. All the data in the column will be lost.
  - You are about to drop the column `primary_key` on the `auth_keys` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_auth_keys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hashed_password" TEXT,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "auth_keys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_auth_keys" ("hashed_password", "id", "user_id") SELECT "hashed_password", "id", "user_id" FROM "auth_keys";
DROP TABLE "auth_keys";
ALTER TABLE "new_auth_keys" RENAME TO "auth_keys";
CREATE UNIQUE INDEX "auth_keys_id_key" ON "auth_keys"("id");
CREATE INDEX "auth_keys_user_id_idx" ON "auth_keys"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
