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
exports.ReviewImagesController = void 0;
const auth_reviewimages_service_1 = require("../services/auth-reviewimages-service");
class ReviewImagesController {
    static getAllReviewImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviewImages = yield auth_reviewimages_service_1.ReviewImagesService.getAllReviewImages(req.body);
            res.status(200).json(reviewImages);
        });
    }
    static getReviewImageById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviewImages = yield auth_reviewimages_service_1.ReviewImagesService.getReviewImageById(req.body);
            res.status(200).json(reviewImages);
        });
    }
    static createReviewImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviewImages = yield auth_reviewimages_service_1.ReviewImagesService.createReviewImage(req.body);
            res.status(201).json(reviewImages);
        });
    }
    static updateReviewImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviewImages = yield auth_reviewimages_service_1.ReviewImagesService.updateReviewImage(req.body);
            res.status(200).json(reviewImages);
        });
    }
    static deleteReviewImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviewImages = yield auth_reviewimages_service_1.ReviewImagesService.deleteReviewImage(req.body);
            res.status(200).json(reviewImages);
        });
    }
}
exports.ReviewImagesController = ReviewImagesController;
