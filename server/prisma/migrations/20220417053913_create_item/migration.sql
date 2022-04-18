-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);
