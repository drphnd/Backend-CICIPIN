import { Request, Response } from "express";
import { MenuService } from "../services/auth-menu-service";

export class MenuController {
    static async getAllMenus(req: Request, res: Response) {
        const menus = await MenuService.getAllMenus(req.body);
        res.status(200).json(menus);
    }

    static async getMenuById(req: Request, res: Response) {
        const menu = await MenuService.getMenuById(req.body);
        res.status(200).json(menu);
    }

    static async getMenusByRestaurantId(req: Request, res: Response): Promise<void> {
        try {
            const restaurantId = parseInt(req.params.restaurantId, 10);
            if (isNaN(restaurantId)) {
                res.status(400).json({ message: "Invalid restaurant ID" });
                return;
            }
    
            const menus = await MenuService.getMenusByRestaurantId(restaurantId);
            res.status(200).json(menus);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch menus by restaurant ID"});
        }
    }
    

    static async createMenu(req: Request, res: Response) {
        try {
            const menu = await MenuService.createMenu(req.body); // Pass req.body to the service
            res.status(201).json(menu);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Failed to create menu", error: error });
        }
    }    

    static async updateMenu(req: Request, res: Response) {
        const menu = await MenuService.updateMenu(req.body);
        res.status(200).json(menu);
    }

    static async deleteMenu(req: Request, res: Response) {
        const menu = await MenuService.deleteMenu(req.body);
        res.status(200).json(menu);
    }
}