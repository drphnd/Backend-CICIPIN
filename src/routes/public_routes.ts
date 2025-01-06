// publicc-router.ts
import express from "express";
import { Router } from 'express';

import { UsersController } from "../controllers/users-controllers";
import { RestaurantsController } from "../controllers/restaurants-controllers";
import { MenuCategoriesController } from "../controllers/menucategories-controllers";
import { RestaurantCategoryController } from "../controllers/restaurantcategories-controllers";
import { ReviewsController } from "../controllers/reviews-controllers";
import { ReviewImagesController } from "../controllers/reviewimages-controllers";
import { RestaurantImageController } from "../controllers/retaurantimages-controllers";
import { RestaurantCategoryPairingController } from "../controllers/restaurantcategoriespairing-controllers";
import { ReviewUserController } from "../controllers/reviewUsers-controllers"; 
import { MenuController } from "../controllers/menus-controller";
import { BookmarkController } from "../controllers/bookmarks-controller";
import { MenuCategoryPairingController } from "../controllers/menucategoriespairings-controllers";
export const publicRouter = Router();

// Users
publicRouter.get("/cicipin/users", UsersController.getAllUsers);
publicRouter.get("/cicipin/users/:id", UsersController.getUserById);
publicRouter.post("/cicipin/users/register", UsersController.register);
publicRouter.post("/cicipin/users/login", UsersController.login);
publicRouter.post("/cicipin/users/logout", UsersController.logout);
publicRouter.put("/cicipin/users/:id", UsersController.updateUser);
publicRouter.delete("/cicipin/users/:id", UsersController.deleteUser);
publicRouter.get("/cicipin/users/usersRestaurants/:id", UsersController.getUserRestaurants);

// Restaurants
publicRouter.get("/cicipin/restaurants", RestaurantsController.getAllRestaurants);
publicRouter.get("/cicipin/restaurants/:id", RestaurantsController.getRestaurantById);
publicRouter.post("/cicipin/restaurants", RestaurantsController.createRestaurant);
publicRouter.put("/cicipin/restaurants/:id", RestaurantsController.updateRestaurant);
publicRouter.delete("/cicipin/restaurants/:id", RestaurantsController.deleteRestaurant);

// Menu Categories
publicRouter.get("/cicipin/menuCategories", MenuCategoriesController.getAllMenuCategories);
publicRouter.get("/cicipin/menuCategories/:id", MenuCategoriesController.getMenuCategoryById);
publicRouter.post("/cicipin/menuCategories", MenuCategoriesController.createMenuCategory);
publicRouter.put("/cicipin/menuCategories/:id", MenuCategoriesController.updateMenuCategory);
publicRouter.delete("/cicipin/menuCategories/:id", MenuCategoriesController.deleteMenuCategory);

// Restaurant Categories
publicRouter.get("/cicipin/restaurantCategories", RestaurantCategoryController.getAllRestaurantCategories);
publicRouter.get("/cicipin/restaurantCategories/:id", RestaurantCategoryController.getRestaurantCategoryById);
publicRouter.post("/cicipin/restaurantCategories", RestaurantCategoryController.createRestaurantCategory);
publicRouter.put("/cicipin/restaurantCategories/:id", RestaurantCategoryController.updateRestaurantCategory);
publicRouter.delete("/cicipin/restaurantCategories/:id", RestaurantCategoryController.deleteRestaurantCategory);

// Reviews
publicRouter.get("/cicipin/reviews", ReviewsController.getAllReviews);
publicRouter.get("/cicipin/reviews/:id", ReviewsController.getReviewById);
publicRouter.post("/cicipin/reviews", ReviewsController.createReview);
publicRouter.put("/cicipin/reviews/:id", ReviewsController.updateReview);   
publicRouter.delete("/cicipin/reviews/:id", ReviewsController.deleteReview);

// Review Images
publicRouter.get("/cicipin/reviewImages", ReviewImagesController.getAllReviewImages);
publicRouter.get("/cicipin/reviewImages/:id", ReviewImagesController.getReviewImageById);
publicRouter.post("/cicipin/reviewImages", ReviewImagesController.createReviewImage);
publicRouter.put("/cicipin/reviewImages/:id", ReviewImagesController.updateReviewImage);   
publicRouter.delete("/cicipin/reviewImages/:id", ReviewImagesController.deleteReviewImage);

// Restaurant Images
publicRouter.get("/cicipin/restaurantImages", RestaurantImageController.getAllRestaurantImages);
publicRouter.get("/cicipin/restaurantImages/:id", RestaurantImageController.getRestaurantImageById);
publicRouter.post("/cicipin/restaurantImages", RestaurantImageController.createRestaurantImage);
publicRouter.put("/cicipin/restaurantImages/:id", RestaurantImageController.updateRestaurantImage);   
publicRouter.delete("/cicipin/restaurantImages/:id", RestaurantImageController.deleteRestaurantImage);

// Restaurant Category Pairings
publicRouter.get("/cicipin/restaurantCategoryPairings", RestaurantCategoryPairingController.getAllRestaurantCategoryPairings);
publicRouter.get("/cicipin/restaurantCategoryPairings/:id", RestaurantCategoryPairingController.getRestaurantCategoryPairingById);
publicRouter.post("/cicipin/restaurantCategoryPairings", RestaurantCategoryPairingController.createRestaurantCategoryPairing);
publicRouter.put("/cicipin/restaurantCategoryPairings/:id", RestaurantCategoryPairingController.updateRestaurantCategoryPairing);   
publicRouter.delete("/cicipin/restaurantCategoryPairings/:id", RestaurantCategoryPairingController.deleteRestaurantCategoryPairing);

// Review User
publicRouter.get("/cicipin/reviewUsers", ReviewUserController.getReviewUsers);
publicRouter.get("/cicipin/reviewUsers/:id", ReviewUserController.getReviewUserById);
publicRouter.post("/cicipin/reviewUsers", ReviewUserController.createReviewUser);
publicRouter.put("/cicipin/reviewUsers/:id", ReviewUserController.updateReviewUser);   
publicRouter.delete("/cicipin/reviewUsers/:id", ReviewUserController.deleteReviewUser);

// Menus
publicRouter.get("/cicipin/menus", MenuController.getAllMenus);
publicRouter.get("/cicipin/menus/:id", MenuController.getMenuById);
publicRouter.post("/cicipin/menus", MenuController.createMenu);
publicRouter.put("/cicipin/menus/:id", MenuController.updateMenu);
publicRouter.delete("/cicipin/menus/:id", MenuController.deleteMenu);

//Bookmark
publicRouter.post("/cicipin/bookmarks", BookmarkController.createBookmark);
publicRouter.get("/cicipin/bookmarks", BookmarkController.getAllBookmarks);
publicRouter.get("/cicipin/bookmarks/:id", BookmarkController.getBookmarkById);
publicRouter.put("/cicipin/bookmarks/:id", BookmarkController.updateBookmark);
publicRouter.delete("/cicipin/bookmarks/:id", BookmarkController.deleteBookmark);

//Menu Categories Pairings
publicRouter.get("/cicipin/menuCategoryPairings", MenuCategoryPairingController.getAllMenuCategoryPairings);
publicRouter.get("/cicipin/menuCategoryPairings/:id", MenuCategoryPairingController.getMenuCategoryPairingsbyId);
publicRouter.post("/cicipin/menuCategoryPairings", MenuCategoryPairingController.createMenuCategoryPairing);
publicRouter.put("/cicipin/menuCategoryPairings/:id", MenuCategoryPairingController.updateMenuCategoryPairing);
publicRouter.delete("/cicipin/menuCategoryPairings/:id", MenuCategoryPairingController.deleteMenuCategoryPairing);