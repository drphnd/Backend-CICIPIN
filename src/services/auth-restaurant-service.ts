import { Restaurants } from "@prisma/client";
import { restaurantsValidation } from "../validations/restaurants-service";
import {
  requestRestaurant,
  responseRestaurant,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
  toUpdateRestaurantResponse,
  getRestaurantReviews,
  toRestaurantResponseList
} from "../models/restaurants-model-response";
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";
import { ReviewsList } from "../models/reviews-model-response";
import { ResponseError } from "../errors/response-error";

export class RestaurantService {
  static async getAllRestaurants(
    restaurants: Restaurants
  ): Promise<responseRestaurant[]> {
    const getAllRestaurants = await prismaClient.restaurants.findMany();
    return toRestaurantResponseList(getAllRestaurants);
  }

  static async getRestaurantById(
    restaurants: Restaurants
  ): Promise<Restaurants> {
    const getRestaurantById = await prismaClient.restaurants.findUnique({
      where: {
        id: restaurants.id,
      }
    })
    if (!getRestaurantById) {
      throw new ResponseError(400, "Restaurant not found");
  }
  
    return getRestaurantById
  }

  static async createRestaurant(
    requestRestaurant: requestRestaurant
  ): Promise<string> {
    // validate the request
    const validateRequest = Validation.validate(
      restaurantsValidation.REGISTER,
      requestRestaurant
    );
    // add the restaurant to the database
    const createRestaurant = await prismaClient.restaurants.create({
      data: {
        name: validateRequest.name,
        address: validateRequest.address,
        longtitude: validateRequest.longtitude,
        latitude: validateRequest.latitude,
        description: validateRequest.description,
        UsersID: validateRequest.UsersID
      },
    });
    return "Data Create Successfully";
  }

  static async updateRestaurant(
    UpdateRestaurant: updateRestaurant
  ): Promise<responseRestaurant> {
    // Validate the request
    const validateRequest = Validation.validate(
      restaurantsValidation.UPDATE,
      UpdateRestaurant
    );

    // Update the restaurant in the database
    const updatedRestaurant = await prismaClient.restaurants.update({
      where: {
        id: UpdateRestaurant.id,
        UsersID: UpdateRestaurant.userID, // Corrected from userID to UsersID
      },
      data: {
        name: validateRequest.name,
        address: validateRequest.address,
        longtitude: validateRequest.longtitude,
        latitude: validateRequest.latitude,
        description: validateRequest.description,
      },
    });

    // Assuming Users is fetched elsewhere and available here
    const user = await prismaClient.users.findUnique({
      where: { id: UpdateRestaurant.userID },
    });

    if (!user) {
      throw new Error("User not found"); // Handle cases where the user doesn't exist
    }

    return toUpdateRestaurantResponse(updatedRestaurant); // Pass the user as the second argument
  }


  static async deleteRestaurant(deleteRestaurant: deleteRestaurant): Promise<string> {
    const deleteRestaurantById = await prismaClient.restaurants.delete({
      where: {
        id: deleteRestaurant.id,
      },
    });
    return "Delete Restaurant";
  }

  // BUAT RESTO BISA MENGAMBIL DATA REVIEW HANYA DIRESTO TERTENTU SAJA

  
}