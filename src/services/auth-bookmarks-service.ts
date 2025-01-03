import { Bookmarks } from "@prisma/client";
import {
    createBookmark,
    requestBookmark,
    responseBookmark,
    updateBookmark,
    toBookmarkResponse,
} from "../models/bookmarks-model-response"; // Adjust the path as needed
import { prismaClient } from "../application/database";

export class BookmarkService {
    static async createBookmark(requestBookmark: requestBookmark): Promise<responseBookmark> {
        const newBookmark = await prismaClient.bookmarks.create({
            data: {
                isBookmarked: requestBookmark.isBookmarked,
                UsersID: requestBookmark.UsersID,
                RestaurantsID: requestBookmark.RestaurantsID,
            },
        });

        return toBookmarkResponse(newBookmark);
    }

    static async getAllBookmarks(body: any): Promise<responseBookmark[]> {
        const bookmarks = await prismaClient.bookmarks.findMany();
        return bookmarks.map(toBookmarkResponse);
    }

    static async getBookmarkById(bookmark: Bookmarks): Promise<responseBookmark | null> {
        const foundBookmark = await prismaClient.bookmarks.findUnique({
            where: {
                id: bookmark.id,
            },
        });

        if (!foundBookmark) {
            throw new Error("Bookmark not found");
        }

        return toBookmarkResponse(foundBookmark);
    }

    static async updateBookmark(updateBookmark: updateBookmark): Promise<responseBookmark> {
        const updatedBookmark = await prismaClient.bookmarks.update({
            where: {
                id: updateBookmark.id,
            },
            data: {
                isBookmarked: updateBookmark.isBookmarked,
            },
        });

        return toBookmarkResponse(updatedBookmark);
    }

    static async deleteBookmark(deleteBookmark: { id: number }): Promise<string> {
        await prismaClient.bookmarks.delete({
            where: {
                id: deleteBookmark.id,
            },
        });

        return "Bookmark deleted successfully";
    }
}
