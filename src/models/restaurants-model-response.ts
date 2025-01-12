import { Restaurants } from "@prisma/client";
import { Users } from "@prisma/client";
import { ReviewsList } from "./reviews-model-response";


export interface createRestaurant{
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
    usersID: number;
}

export interface requestRestaurant{
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
    UsersID: number;
}

export interface responseRestaurant{
    id: number;
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
}

export function toRestaurantResponse(restaurants: Restaurants){
    return {
        id: restaurants.id,
        name: restaurants.name,
        address: restaurants.address,
        longtitude: restaurants.longtitude,
        latitude: restaurants.latitude,
        description: restaurants.description
    }
}

export function toRestaurantResponseList(restaurants: Restaurants[]){
    const result = restaurants.map(restaurant => {
        return {
            id: restaurant.id,
            name: restaurant.name,
            address: restaurant.address,
            longtitude: restaurant.longtitude,
            latitude: restaurant.latitude,
            description: restaurant.description
        }
    })
    return result;
}


export function toUpdateRestaurantResponse(restaurants: Restaurants) {
    return {
        id: restaurants.id,
        name: restaurants.name,
        address: restaurants.address,
        longtitude: restaurants.longtitude,
        latitude: restaurants.latitude,
        description: restaurants.description,
    };
}

export interface updateRestaurant{
    id: number;
    userID: number;
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
}

export interface deleteRestaurant{
    id: number;
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
}

export interface RestaurantsList{
    id: number;
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
}

export interface getRestaurantReviews{
    id: number;
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
    reviews: ReviewsList[];
}