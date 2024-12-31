import { Request, Response } from "express";
import { RestaurantCategoryPairingService } from "../services/auth-restaurantcategoriespairing-service";

export class RestaurantCategoryPairingController{
    static async getAllRestaurantCategoryPairings(req: Request, res: Response){
        const restaurantCategoryPairings = await RestaurantCategoryPairingService.getAllRestaurantCategoryPairings(req.body);
        res.status(200).json(restaurantCategoryPairings);
    }

    static async getRestaurantCategoryPairingById(req: Request, res: Response){
        const restaurantCategoryPairings = await RestaurantCategoryPairingService.getRestaurantCategoryPairingById(req.body);
        res.status(200).json(restaurantCategoryPairings);
    }   

    static async createRestaurantCategoryPairing(req: Request, res: Response) {
        const restaurantCategoryPairings = await RestaurantCategoryPairingService.createRestaurantCategoryPairing(req.body);
        res.status(201).json(restaurantCategoryPairings);
    }

    static async updateRestaurantCategoryPairing(req: Request, res: Response) {
        const restaurantCategoryPairings = await RestaurantCategoryPairingService.updateRestaurantCategoryPairing(req.body);
        res.status(200).json(restaurantCategoryPairings);
    }   

    static async deleteRestaurantCategoryPairing(req: Request, res: Response) {
        const restaurantCategoryPairings = await RestaurantCategoryPairingService.deleteRestaurantCategoryPairing(req.body);
        res.status(200).json(restaurantCategoryPairings);
    }
}