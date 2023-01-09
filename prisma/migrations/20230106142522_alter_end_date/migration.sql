-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_client" TEXT NOT NULL,
    "id_deliveryman" TEXT,
    "item_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" DATETIME,
    CONSTRAINT "Deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "Deliveryman" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Deliveries_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Deliveries" ("created_at", "end_at", "id", "id_client", "id_deliveryman", "item_name") SELECT "created_at", "end_at", "id", "id_client", "id_deliveryman", "item_name" FROM "Deliveries";
DROP TABLE "Deliveries";
ALTER TABLE "new_Deliveries" RENAME TO "Deliveries";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
