import { ReviewUsers } from "@prisma/client";
import { createReviewUser, toReviewUserResponse, deleteReviewUser, updateReviewUser, requestReviewUser, responseReviewUser } from "../models/reviewusers-model-response";
import { reviewusersValidation } from "../validations/reviewusers-service";
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";
import { toUpdateRestaurantResponse } from "../models/restaurants-model-response";

export class ReviewUserService {
    static async getReviewUsers(): Promise<string> {
        const getReviewUsers = await prismaClient.reviewUsers.findMany({        });
        return "Get Data was successful!";
    }

    static async getReviewUserById(reviewUsers: ReviewUsers): Promise<string> {
        const getReviewUserById = await prismaClient.reviewUsers.findUnique({
            where: {
                id: reviewUsers.id,
            },
        });
        return "getReviewUserById";
    }

    static async createReviewUser(requestReviewUser: requestReviewUser): Promise<string> {
        // validate the request
        const validateRequest = Validation.validate(
            reviewusersValidation.CREATE,
            requestReviewUser
        );
        // add the review user to the database
        const createReviewUser = await prismaClient.reviewUsers.create({
            data: {
                ReviewsID: validateRequest.ReviewsID,
                UsersID: validateRequest.UsersID
            },
        });
        return "Data Create Successfully";
    }

  static async updateReviewUser(updateReviewUser: updateReviewUser): Promise<responseReviewUser> {
    const updateReviewUsers = await prismaClient.reviewUsers.update({
      where: { 
        id: updateReviewUser.id
       },
      data: {
        ReviewsID: updateReviewUser.ReviewsID,
        UsersID: updateReviewUser.UsersID
      },
    });
    return toReviewUserResponse(updateReviewUsers);
  }

  static async deleteReviewUser(id: number): Promise<string> {
    await prismaClient.reviewUsers.delete({ where: { id } });
    return "Delete Review User";
  }
}
