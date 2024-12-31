import { RestaurantCategoriesPairings } from "@prisma/client";
import { createRestaurantCategoryPairing, toRestaurantCategoryPairingResponse, deleteRestaurantCategoryPairing, updateRestaurantCategoryPairing, responseRestaurantCategoryPairing, requestRestaurantCategoryPairing } from "../models/restaurantcategoriespairing-model-response";
import { restaurantscategoriespairingsValidation } from "../validations/restaurantcategoriespairings-service";
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";

export class RestaurantCategoryPairingService {
    static async getAllRestaurantCategoryPairings(restaurantCategoriesPairings: RestaurantCategoriesPairings): Promise<string> {
        const getAllRestaurantCategoryPairings = await prismaClient.restaurantCategoriesPairings.findMany({
            where: {
                id: restaurantCategoriesPairings.id,
            },
        });
        return "Get Data was successful!";
    }

    static async getRestaurantCategoryPairingById(restaurantCategoriesPairings: RestaurantCategoriesPairings): Promise<string> {
        const getRestaurantCategoryPairingById = await prismaClient.restaurantCategoriesPairings.findUnique({
            where: {
                id: restaurantCategoriesPairings.id,
            },
        });
        return "getRestaurantCategoryPairingById";
    }

    static async createRestaurantCategoryPairing(requestRestaurantCategoryPairing: requestRestaurantCategoryPairing): Promise<string> {
        // validate the request
        const validateRequest = Validation.validate(
            restaurantscategoriespairingsValidation.CREATE,
            requestRestaurantCategoryPairing
        );
        // add the restaurant category pairing to the database
        const createRestaurantCategoryPairing = await prismaClient.restaurantCategoriesPairings.create({
            data: {
                restaurantID: validateRequest.restaurantID,
                RestaurantCategoriesID: validateRequest.RestaurantCategoriesID
            },
        });
        return "Data Create Successfully";
    }

    static async updateRestaurantCategoryPairing(UpdateRestaurantCategoryPairing: updateRestaurantCategoryPairing): Promise<responseRestaurantCategoryPairing> {
        // Validate the request
        const validateRequest = Validation.validate(
            restaurantscategoriespairingsValidation.UPDATE,
            UpdateRestaurantCategoryPairing
        );

        // Update the restaurant category pairing in the database
        const updatedRestaurantCategoryPairing = await prismaClient.restaurantCategoriesPairings.update({
            where: {
                id: UpdateRestaurantCategoryPairing.id,
            },
            data: {
                restaurantID: validateRequest.restaurantID,
                RestaurantCategoriesID: validateRequest.RestaurantCategoriesID,
            },
        });

        return toRestaurantCategoryPairingResponse(updatedRestaurantCategoryPairing);
    }

    static async deleteRestaurantCategoryPairing(deleteRestaurantCategoryPairing: deleteRestaurantCategoryPairing): Promise<string> {
        const deleteRestaurantCategoryPairingById = await prismaClient.restaurantCategoriesPairings.delete({
            where: {
                id: deleteRestaurantCategoryPairing.id,
            },
        });
        return "Delete Restaurant Category Pairing";
    }
}