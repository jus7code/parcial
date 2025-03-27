/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "estudiante" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "curso" TEXT NOT NULL,

    CONSTRAINT "estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "estudiante_name_key" ON "estudiante"("name");

-- CreateIndex
CREATE UNIQUE INDEX "estudiante_email_key" ON "estudiante"("email");
