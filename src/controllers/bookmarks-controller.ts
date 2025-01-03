import { Request, Response } from "express";
import { BookmarkService } from "../services/auth-bookmarks-service";

export class BookmarkController {
    // Create a new bookmark
    static async create(req: Request, res: Response): Promise<void> {
        const { isBookmarked, userId, restaurantId } = req.body; // Extract userId from body

        if (!userId || !restaurantId) {
            res.status(400).json({ error: "userId and restaurantId are required." });
            return;
        }

        try {
            const bookmark = await BookmarkService.createBookmark({ isBookmarked }, userId, restaurantId);
            res.status(201).json(bookmark);
        } catch (error) {
            res.status(500).json({ error: "Failed to create bookmark" });
        }
    }

    // Get bookmark by ID
    static async getById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const bookmark = await BookmarkService.getBookmarkById(Number(id));
            if (!bookmark) {
                res.status(404).json({ error: "Bookmark not found" });
            } else {
                res.status(200).json(bookmark);
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch bookmark" });
        }
    }

    // Update bookmark
    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { isBookmarked } = req.body;

        try {
            const updatedBookmark = await BookmarkService.updateBookmark({ id: Number(id), isBookmarked });
            if (!updatedBookmark) {
                res.status(404).json({ error: "Bookmark not found" });
            } else {
                res.status(200).json(updatedBookmark);
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to update bookmark" });
        }
    }

    // Delete bookmark
    static async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const success = await BookmarkService.deleteBookmark(Number(id));
            if (!success) {
                res.status(404).json({ error: "Bookmark not found" });
            } else {
                res.status(200).json({ message: "Bookmark deleted successfully" });
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to delete bookmark" });
        }
    }
}
