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
exports.ReviewImagesService = void 0;
const reviewimages_model_response_1 = require("../models/reviewimages-model-response");
const reviewimages_service_1 = require("../validations/reviewimages-service");
const validation_1 = require("../validations/validation");
const database_1 = require("../application/database");
class ReviewImagesService {
    static getAllReviewImages(reviewImages) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllReviewImages = yield database_1.prismaClient.reviewsImages.findMany({
                where: {
                    id: reviewImages.id,
                },
            });
            return "Get Data was successful!";
        });
    }
    static getReviewImageById(reviewImages) {
        return __awaiter(this, void 0, void 0, function* () {
            const getReviewImageById = yield database_1.prismaClient.reviewsImages.findUnique({
                where: {
                    id: reviewImages.id,
                },
            });
            return "getReviewImageById";
        });
    }
    static createReviewImage(requestReviewImage) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(reviewimages_service_1.reviewimagesValidation.CREATE, requestReviewImage);
            // add the review image to the database
            const createReviewImage = yield database_1.prismaClient.reviewsImages.create({
                data: {
                    image: validateRequest.image,
                    ReviewsID: validateRequest.reviewID
                },
            });
            return "Data Create Successfully";
        });
    }
    static updateReviewImage(UpdateReviewImage) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate the request
            const validateRequest = validation_1.Validation.validate(reviewimages_service_1.reviewimagesValidation.UPDATE, UpdateReviewImage);
            // Update the review image in the database
            const updatedReviewImage = yield database_1.prismaClient.reviewsImages.update({
                where: {
                    id: UpdateReviewImage.id,
                },
                data: {
                    image: validateRequest.image,
                },
            });
            return (0, reviewimages_model_response_1.toReviewImageResponse)(updatedReviewImage);
        });
    }
    static deleteReviewImage(deleteReviewImage) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteReviewImageById = yield database_1.prismaClient.reviewsImages.delete({
                where: {
                    id: deleteReviewImage.id,
                },
            });
            return "Delete Review Image";
        });
    }
}
exports.ReviewImagesService = ReviewImagesService;
