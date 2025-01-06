import { Menus } from "@prisma/client";
import { menusValidation } from "../validations/menus-service";
import {
    requestMenu,
    responseMenu,
    createMenu,
    toMenuResponse,
    deleteMenu,
    updateMenu,
} from "../models/menus-model-response";
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";

export class MenuService {
    static async getAllMenus(body: any): Promise<responseMenu[]> {
        const menus = await prismaClient.menus.findMany();
        return menus.map(toMenuResponse);
    }

    static async getMenuById(menu: Menus): Promise<responseMenu | null> {
        const foundMenu = await prismaClient.menus.findUnique({
            where: {
                id: menu.id,
            },
        });
        if (!foundMenu) {
            throw new Error("Menu not found");
        }
        return toMenuResponse(foundMenu);
    }
    
    static async getMenusByRestaurantId(
        restaurantId: number
    ): Promise<responseMenu[]> {
        // Fetch menus where the RestaurantsID matches the given restaurantId
        const menus = await prismaClient.menus.findMany({
            where: {
                RestaurantsID: restaurantId,
            },
        });
    
        // Map the result to the response model
        return menus.map(toMenuResponse);
    }

    static async createMenu(requestMenu: requestMenu): Promise<responseMenu> {
        // Validate the request
        const validateRequest = Validation.validate(
            menusValidation.CREATE,
            requestMenu
        );
    
        const newMenu = await prismaClient.menus.create({
            data: {
                name: validateRequest.name,
                image: validateRequest.image,
                description: validateRequest.description,
                price: validateRequest.price,
                RestaurantsID: validateRequest.RestaurantsID,
            },
        });
    
        return toMenuResponse(newMenu);
    }
    
    

    static async updateMenu(updateMenu: updateMenu): Promise<responseMenu> {
        // Validate the request
        const validateRequest = Validation.validate(
            menusValidation.UPDATE,
            updateMenu
        );

        // Update the menu in the database
        const updatedMenu = await prismaClient.menus.update({
            where: {
                id: updateMenu.id,
            },
            data: {
                name: validateRequest.name,
                image: validateRequest.image,
                description: validateRequest.description,
                price: validateRequest.price,
            },
        });

        return toMenuResponse(updatedMenu);
    }

    static async deleteMenu(deleteMenu: deleteMenu): Promise<string> {
        await prismaClient.menus.delete({
            where: {
                id: deleteMenu.id,
            },
        });
        return "Menu deleted successfully";
    }
}
