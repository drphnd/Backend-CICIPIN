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
exports.RestaurantImageService = void 0;
const restaurantimages_model_response_1 = require("../models/restaurantimages-model-response");
const restaurantimages_service_1 = require("../validations/restaurantimages-service");
const validation_1 = require("../validations/validation");
const database_1 = require("../application/database");
class RestaurantImageService {
    static getAllRestaurantImages(restaurantImages) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllRestaurantImages = yield database_1.prismaClient.restaurantImages.findMany({
                where: {
                    id: restaurantImages.id,
                },
            });
            return "Get Data was successful!";
        });
    }
    static getRestaurantImageById(restaurantImages) {
        return __awaiter(this, void 0, void 0, function* () {
            const getRestaurantImageById = yield database_1.prismaClient.restaurantImages.findUnique({
                where: {
                    id: restaurantImages.id,
                },
            });
            return "getRestaurantImageById";
        });
    }
    static createRestaurantImage(requestRestaurantImage) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(restaurantimages_service_1.restaurantsImageValidation.REGISTER, requestRestaurantImage);
            // add the restaurant image to the database
            const createRestaurantImage = yield database_1.prismaClient.restaurantImages.create({
                data: {
                    image: validateRequest.image,
                    description: validateRequest.description,
                    RestaurantsID: validateRequest.RestaurantsID
                },
            });
            return "Data Create Successfully";
        });
    }
    static updateRestaurantImage(UpdateRestaurantImage) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate the request
            const validateRequest = validation_1.Validation.validate(restaurantimages_service_1.restaurantsImageValidation.UPDATE, UpdateRestaurantImage);
            // Update the restaurant image in the database
            const updatedRestaurantImage = yield database_1.prismaClient.restaurantImages.update({
                where: {
                    id: UpdateRestaurantImage.id,
                },
                data: {
                    image: validateRequest.image,
                    description: validateRequest.description,
                },
            });
            return (0, restaurantimages_model_response_1.toRestaurantImageResponse)(updatedRestaurantImage);
        });
    }
    static deleteRestaurantImage(deleteRestaurantImage) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteRestaurantImageById = yield database_1.prismaClient.restaurantImages.delete({
                where: {
                    id: deleteRestaurantImage.id,
                },
            });
            return "Delete Restaurant Image";
        });
    }
}
exports.RestaurantImageService = RestaurantImageService;
