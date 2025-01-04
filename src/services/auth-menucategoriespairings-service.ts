// authMenuCategoryPairingService.ts
import { prismaClient } from "../application/database";
import {
    createMenuCategoryPairing,
    requestMenuCategoryPairing,
    responseMenuCategoryPairing,
    updateMenuCategoryPairing,
    deleteMenuCategoryPairing,
    toMenuCategoryPairingResponse,
} from "../models/menucategoriespairings-model-response";
import { Validation } from "../validations/validation";
import { menucategoriespairingsValidation } from "../validations/menucategoriespairings-service";

export class MenuCategoryPairingService {
    static async getAllMenuCategoryPairings(menuCategoriesPairings: requestMenuCategoryPairing): Promise<string> {
        const getAllMenuCategoryPairings = await prismaClient.menuCategoriesPairings.findMany({
            where: {
                id: menuCategoriesPairings.id,
            },
        });
        return "Get Data was successful!";
    }

    static async getMenuCategoryPairingById(menuCategoriesPairings: requestMenuCategoryPairing): Promise<string> {
        const getMenuCategoryPairingById = await prismaClient.menuCategoriesPairings.findUnique({
            where: {
                id: menuCategoriesPairings.id,
            },
        });
        return "getMenuCategoryPairingById";
    }

    static async createMenuCategoryPairing(requestMenuCategoryPairing: createMenuCategoryPairing): Promise<string> {
        // validate the request
        const validateRequest = Validation.validate(
            menucategoriespairingsValidation.CREATE,
            requestMenuCategoryPairing
        );
        // add the menu category pairing to the database
        const createMenuCategoryPairing = await prismaClient.menuCategoriesPairings.create({
            data: {
                menuID: validateRequest.menuID,
                MenuCategoriesID: validateRequest.MenuCategoriesID,
            },
        });
        return "Data Create Successfully";
    }
    static async updateMenuCategoryPairing(UpdateMenuCategoryPairing: updateMenuCategoryPairing): Promise<responseMenuCategoryPairing> {
        // Validate the request
        const validateRequest = Validation.validate(
            menucategoriespairingsValidation.UPDATE,
            UpdateMenuCategoryPairing
        );

        // Update the menu category pairing in the database
        const updatedMenuCategoryPairing = await prismaClient.menuCategoriesPairings.update({
            where: {
                id: UpdateMenuCategoryPairing.id,
            },
            data: {
                menuID: validateRequest.menuID,
                MenuCategoriesID: validateRequest.MenuCategoriesID,
            },
            include: {
                menuCategories: true,
            },
        });

        return toMenuCategoryPairingResponse(updatedMenuCategoryPairing);
    }
    

    static async deleteMenuCategoryPairing(deleteMenuCategoryPairing: deleteMenuCategoryPairing): Promise<string> {
        const deleteMenuCategoryPairingById = await prismaClient.menuCategoriesPairings.delete({
            where: {
                id: deleteMenuCategoryPairing.id,
            },
        });
        return "Delete Menu Category Pairing";
    }
}
