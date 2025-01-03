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
exports.RestaurantCategoryPairingController = void 0;
const auth_restaurantcategoriespairing_service_1 = require("../services/auth-restaurantcategoriespairing-service");
class RestaurantCategoryPairingController {
    static getAllRestaurantCategoryPairings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantCategoryPairings = yield auth_restaurantcategoriespairing_service_1.RestaurantCategoryPairingService.getAllRestaurantCategoryPairings(req.body);
            res.status(200).json(restaurantCategoryPairings);
        });
    }
    static getRestaurantCategoryPairingById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantCategoryPairings = yield auth_restaurantcategoriespairing_service_1.RestaurantCategoryPairingService.getRestaurantCategoryPairingById(req.body);
            res.status(200).json(restaurantCategoryPairings);
        });
    }
    static createRestaurantCategoryPairing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantCategoryPairings = yield auth_restaurantcategoriespairing_service_1.RestaurantCategoryPairingService.createRestaurantCategoryPairing(req.body);
            res.status(201).json(restaurantCategoryPairings);
        });
    }
    static updateRestaurantCategoryPairing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantCategoryPairings = yield auth_restaurantcategoriespairing_service_1.RestaurantCategoryPairingService.updateRestaurantCategoryPairing(req.body);
            res.status(200).json(restaurantCategoryPairings);
        });
    }
    static deleteRestaurantCategoryPairing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantCategoryPairings = yield auth_restaurantcategoriespairing_service_1.RestaurantCategoryPairingService.deleteRestaurantCategoryPairing(req.body);
            res.status(200).json(restaurantCategoryPairings);
        });
    }
}
exports.RestaurantCategoryPairingController = RestaurantCategoryPairingController;
