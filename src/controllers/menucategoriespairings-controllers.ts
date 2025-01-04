// menuCategoryPairingController.ts
import { Request, Response } from "express";
import { MenuCategoryPairingService } from "../services/auth-menucategoriespairings-service";

export class MenuCategoryPairingController {
    static async createMenuCategoryPairing(req: Request, res: Response): Promise<void> {
        try {
            const menuCategoryPairing = await MenuCategoryPairingService.createMenuCategoryPairing(req.body);
            res.status(201).json(menuCategoryPairing);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Failed to create menu category pairing", error });
        }
    }

    static async getAllMenuCategoryPairings(req: Request, res: Response): Promise<void> {
        try {
            const menuCategoryPairings = await MenuCategoryPairingService.getAllMenuCategoryPairings(req.body);
            res.status(200).json(menuCategoryPairings);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch menu category pairings", error });
        }
    }
    static async getMenuCategoryPairingsbyId(req: Request, res: Response): Promise<void> {
        try {
            const menuCategoryPairings = await MenuCategoryPairingService.getMenuCategoryPairingById(req.body);
            res.status(200).json(menuCategoryPairings);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch menu category pairings", error });
        }
    }

    static async updateMenuCategoryPairing(req: Request, res: Response): Promise<void> {
        try {
            const updatedMenuCategoryPairing = await MenuCategoryPairingService.updateMenuCategoryPairing(req.body);
            res.status(200).json(updatedMenuCategoryPairing);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Failed to update menu category pairing", error });
        }
    }

    static async deleteMenuCategoryPairing(req: Request, res: Response): Promise<void> {
        try {
            await MenuCategoryPairingService.deleteMenuCategoryPairing(req.body);
            res.status(200).json({ message: "Menu category pairing deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Failed to delete menu category pairing", error });
        }
    }
}
