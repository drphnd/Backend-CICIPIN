"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantCategoryPairingService = void 0;
const restaurantcategoriespairing_model_response_1 = require("../models/restaurantcategoriespairing-model-response");
const restaurantcategoriespairings_service_1 = require("../validations/restaurantcategoriespairings-service");
const validation_1 = require("../validations/validation");
const database_1 = require("../application/database");
class RestaurantCategoryPairingService {
    static getAllRestaurantCategoryPairings(restaurantCategoriesPairings) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllRestaurantCategoryPairings = yield database_1.prismaClient.restaurantCategoriesPairings.findMany({
                where: {
                    id: restaurantCategoriesPairings.id,
                },
            });
            return "Get Data was successful!";
        });
    }
    static getRestaurantCategoryPairingById(restaurantCategoriesPairings) {
        return __awaiter(this, void 0, void 0, function* () {
            const getRestaurantCategoryPairingById = yield database_1.prismaClient.restaurantCategoriesPairings.findUnique({
                where: {
                    id: restaurantCategoriesPairings.id,
                },
            });
            return "getRestaurantCategoryPairingById";
        });
    }
    static createRestaurantCategoryPairing(requestRestaurantCategoryPairing) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(restaurantcategoriespairings_service_1.restaurantscategoriespairingsValidation.CREATE, requestRestaurantCategoryPairing);
            // add the restaurant category pairing to the database
            const createRestaurantCategoryPairing = yield database_1.prismaClient.restaurantCategoriesPairings.create({
                data: {
                    restaurantID: validateRequest.restaurantID,
                    RestaurantCategoriesID: validateRequest.RestaurantCategoriesID
                },
            });
            return "Data Create Successfully";
        });
    }
    static updateRestaurantCategoryPairing(UpdateRestaurantCategoryPairing) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate the request
            const validateRequest = validation_1.Validation.validate(restaurantcategoriespairings_service_1.restaurantscategoriespairingsValidation.UPDATE, UpdateRestaurantCategoryPairing);
            // Update the restaurant category pairing in the database
            const updatedRestaurantCategoryPairing = yield database_1.prismaClient.restaurantCategoriesPairings.update({
                where: {
                    id: UpdateRestaurantCategoryPairing.id,
                },
                data: {
                    restaurantID: validateRequest.restaurantID,
                    RestaurantCategoriesID: validateRequest.RestaurantCategoriesID,
                },
            });
            return (0, restaurantcategoriespairing_model_response_1.toRestaurantCategoryPairingResponse)(updatedRestaurantCategoryPairing);
        });
    }
    static deleteRestaurantCategoryPairing(deleteRestaurantCategoryPairing) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteRestaurantCategoryPairingById = yield database_1.prismaClient.restaurantCategoriesPairings.delete({
                where: {
                    id: deleteRestaurantCategoryPairing.id,
                },
            });
            return "Delete Restaurant Category Pairing";
        });
    }
}
exports.RestaurantCategoryPairingService = RestaurantCategoryPairingService;
