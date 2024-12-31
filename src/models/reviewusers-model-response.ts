import { ReviewUsers } from "@prisma/client";

export interface createReviewUser{
    ReviewsID: number;
    UsersID: number;
}

export interface requestReviewUser{
    ReviewsID: number;
    UsersID: number;
}

export interface responseReviewUser{
    id: number;
    ReviewsID: number;
    UsersID: number
}

export function toReviewUserResponse(reviewUsers: ReviewUsers){
    return {
        id: reviewUsers.id,
        ReviewsID: reviewUsers.ReviewsID,
        UsersID: reviewUsers.UsersID,
    }
}

export function toUpdateReviewUserResponse(reviewUsers: ReviewUsers){
    return {
        id: reviewUsers.id,
        ReviewsID: reviewUsers.ReviewsID,
        UsersID: reviewUsers.UsersID,
    }
}

export interface updateReviewUser{
    id: number;
    ReviewsID: number;
    UsersID: number;
}

export interface deleteReviewUser{
    id: number;
    ReviewsID: number;
    UsersID: number;
}