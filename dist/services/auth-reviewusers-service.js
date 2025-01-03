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
exports.ReviewUserService = void 0;
const reviewusers_model_response_1 = require("../models/reviewusers-model-response");
const reviewusers_service_1 = require("../validations/reviewusers-service");
const validation_1 = require("../validations/validation");
const database_1 = require("../application/database");
class ReviewUserService {
    static getReviewUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const getReviewUsers = yield database_1.prismaClient.reviewUsers.findMany({});
            return "Get Data was successful!";
        });
    }
    static getReviewUserById(reviewUsers) {
        return __awaiter(this, void 0, void 0, function* () {
            const getReviewUserById = yield database_1.prismaClient.reviewUsers.findUnique({
                where: {
                    id: reviewUsers.id,
                },
            });
            return "getReviewUserById";
        });
    }
    static createReviewUser(requestReviewUser) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(reviewusers_service_1.reviewusersValidation.CREATE, requestReviewUser);
            // add the review user to the database
            const createReviewUser = yield database_1.prismaClient.reviewUsers.create({
                data: {
                    ReviewsID: validateRequest.ReviewsID,
                    UsersID: validateRequest.UsersID
                },
            });
            return "Data Create Successfully";
        });
    }
    static updateReviewUser(updateReviewUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateReviewUsers = yield database_1.prismaClient.reviewUsers.update({
                where: {
                    id: updateReviewUser.id
                },
                data: {
                    ReviewsID: updateReviewUser.ReviewsID,
                    UsersID: updateReviewUser.UsersID
                },
            });
            return (0, reviewusers_model_response_1.toReviewUserResponse)(updateReviewUsers);
        });
    }
    static deleteReviewUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.prismaClient.reviewUsers.delete({ where: { id } });
            return "Delete Review User";
        });
    }
}
exports.ReviewUserService = ReviewUserService;
