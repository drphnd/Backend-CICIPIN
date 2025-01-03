/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bookmarks" DROP CONSTRAINT "Bookmarks_UsersID_fkey";

-- DropForeignKey
ALTER TABLE "Restaurants" DROP CONSTRAINT "Restaurants_UsersID_fkey";

-- DropForeignKey
ALTER TABLE "ReviewUsers" DROP CONSTRAINT "ReviewUsers_UsersID_fkey";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profile_picture" TEXT NOT NULL,
    "token" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "Restaurants" ADD CONSTRAINT "Restaurants_UsersID_fkey" FOREIGN KEY ("UsersID") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_UsersID_fkey" FOREIGN KEY ("UsersID") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewUsers" ADD CONSTRAINT "ReviewUsers_UsersID_fkey" FOREIGN KEY ("UsersID") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
