-- CreateTable
CREATE TABLE "point_items" (
    "id" SERIAL NOT NULL,
    "pointId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "point_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "point_items" ADD CONSTRAINT "point_items_pointId_fkey" FOREIGN KEY ("pointId") REFERENCES "points"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "point_items" ADD CONSTRAINT "point_items_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
