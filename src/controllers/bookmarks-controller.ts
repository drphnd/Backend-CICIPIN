// bookmarkController.ts
import { Request, Response } from "express";
import { BookmarkService } from "../services/auth-bookmarks-service"; // Adjust the path based on your project structure

export class BookmarkController {
    static async createBookmark(req: Request, res: Response): Promise<void> {
        try {
            const bookmark = await BookmarkService.createBookmark(req.body);
            res.status(201).json(bookmark);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Failed to create bookmark", error });
        }
    }

    static async getAllBookmarks(req: Request, res: Response): Promise<void> {
        try {
            const bookmarks = await BookmarkService.getAllBookmarks(req.body);
            res.status(200).json(bookmarks);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch bookmarks", error });
        }
    }

    static async getBookmarkById(req: Request, res: Response): Promise<void> {
        try {
            const bookmark = await BookmarkService.getBookmarkById(req.body);
            res.status(200).json(bookmark);
        } catch (error) {
            console.error(error);
            res.status(404).json({ message: "Bookmark not found", error });
        }
    }

    static async updateBookmark(req: Request, res: Response): Promise<void> {
        try {
            const bookmark = await BookmarkService.updateBookmark(req.body);
            res.status(200).json(bookmark);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Failed to update bookmark", error });
        }
    }

    static async deleteBookmark(req: Request, res: Response): Promise<void> {
        try {
            const bookmark = await BookmarkService.deleteBookmark(req.body);
            res.status(200).json(bookmark);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Failed to delete bookmark", error });
        }
    }
}
