/*
  Warnings:

  - Added the required column `toolId` to the `BookmarkedTool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookmarkedTool" ADD COLUMN     "toolId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BookmarkedTool" ADD CONSTRAINT "BookmarkedTool_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
