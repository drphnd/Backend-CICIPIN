"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toReviewUserResponse = toReviewUserResponse;
exports.toUpdateReviewUserResponse = toUpdateReviewUserResponse;
function toReviewUserResponse(reviewUsers) {
    return {
        id: reviewUsers.id,
        ReviewsID: reviewUsers.ReviewsID,
        UsersID: reviewUsers.UsersID,
    };
}
function toUpdateReviewUserResponse(reviewUsers) {
    return {
        id: reviewUsers.id,
        ReviewsID: reviewUsers.ReviewsID,
        UsersID: reviewUsers.UsersID,
    };
}
