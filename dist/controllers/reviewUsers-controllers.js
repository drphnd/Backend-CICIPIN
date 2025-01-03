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
exports.ReviewUserController = void 0;
const auth_reviewusers_service_1 = require("../services/auth-reviewusers-service");
class ReviewUserController {
    static getReviewUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviewUsers = yield auth_reviewusers_service_1.ReviewUserService.getReviewUsers();
            res.status(200).json(reviewUsers);
        });
    }
    static getReviewUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviewUsers = yield auth_reviewusers_service_1.ReviewUserService.getReviewUserById(req.body);
            res.status(200).json(reviewUsers);
        });
    }
    static createReviewUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviewUsers = yield auth_reviewusers_service_1.ReviewUserService.createReviewUser(req.body);
            res.status(201).json(reviewUsers);
        });
    }
    static updateReviewUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviewUsers = yield auth_reviewusers_service_1.ReviewUserService.updateReviewUser(req.body);
            res.status(200).json(reviewUsers);
        });
    }
    static deleteReviewUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviewUsers = yield auth_reviewusers_service_1.ReviewUserService.deleteReviewUser(req.body);
            res.status(200).json(reviewUsers);
        });
    }
}
exports.ReviewUserController = ReviewUserController;
