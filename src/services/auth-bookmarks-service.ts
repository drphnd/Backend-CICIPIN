import { Request, Response } from "express";
import { Bookmarks } from "@prisma/client";
import { bookmarksValidation } from "../validations/bookmarks-service";
import { createBookmark, responseBookmark, requestBookmark, updateBookmark, toBookmarkResponse } from "../models/bookmarks-model-response";
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";


export class BookmarkService {
    // Create a new bookmark
    static async createBookmark(data: createBookmark, userId: number, restaurantId: number): Promise<responseBookmark> {
        const bookmark = await prismaClient.bookmarks.create({
            data: {
                isBookmarked: data.isBookmarked,
                UsersID: userId,
                RestaurantsID: restaurantId
            }
        });
        return toBookmarkResponse(bookmark);
    }

    // Fetch a specific bookmark
    static async getBookmarkById(bookmarkId: number): Promise<responseBookmark | null> {
        const bookmark = await prismaClient.bookmarks.findUnique({
            where: { id: bookmarkId }
        });

        if (!bookmark) return null;
        return toBookmarkResponse(bookmark);
    }

    // Update bookmark
    static async updateBookmark(data: updateBookmark): Promise<responseBookmark | null> {
        const bookmark = await prismaClient.bookmarks.update({
            where: { id: data.id },
            data: {
                isBookmarked: data.isBookmarked
            }
        });

        if (!bookmark) return null;
        return toBookmarkResponse(bookmark);
    }

    // Delete bookmark
    static async deleteBookmark(bookmarkId: number): Promise<boolean> {
        try {
            await prismaClient.bookmarks.delete({
                where: { id: bookmarkId }
            });
            return true;
        } catch (error) {
            return false;
        }
    }
}
