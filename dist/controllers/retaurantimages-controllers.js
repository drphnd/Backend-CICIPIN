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
exports.RestaurantImageController = void 0;
const auth_restaurantimages_service_1 = require("../services/auth-restaurantimages-service");
class RestaurantImageController {
    static getAllRestaurantImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantImages = yield auth_restaurantimages_service_1.RestaurantImageService.getAllRestaurantImages(req.body);
            res.status(200).json(restaurantImages);
        });
    }
    static getRestaurantImageById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantImages = yield auth_restaurantimages_service_1.RestaurantImageService.getRestaurantImageById(req.body);
            res.status(200).json(restaurantImages);
        });
    }
    static createRestaurantImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantImages = yield auth_restaurantimages_service_1.RestaurantImageService.createRestaurantImage(req.body);
            res.status(201).json(restaurantImages);
        });
    }
    static updateRestaurantImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantImages = yield auth_restaurantimages_service_1.RestaurantImageService.updateRestaurantImage(req.body);
            res.status(200).json(restaurantImages);
        });
    }
    static deleteRestaurantImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantImages = yield auth_restaurantimages_service_1.RestaurantImageService.deleteRestaurantImage(req.body);
            res.status(200).json(restaurantImages);
        });
    }
}
exports.RestaurantImageController = RestaurantImageController;
