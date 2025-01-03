"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users-controllers");
const restaurants_controllers_1 = require("../controllers/restaurants-controllers");
const menucategories_controllers_1 = require("../controllers/menucategories-controllers");
const restaurantcategories_controllers_1 = require("../controllers/restaurantcategories-controllers");
const reviews_controllers_1 = require("../controllers/reviews-controllers");
const reviewimages_controllers_1 = require("../controllers/reviewimages-controllers");
const retaurantimages_controllers_1 = require("../controllers/retaurantimages-controllers");
const restaurantcategoriespairing_controllers_1 = require("../controllers/restaurantcategoriespairing-controllers");
const reviewUsers_controllers_1 = require("../controllers/reviewUsers-controllers");
exports.publicRouter = (0, express_1.Router)();
// Users
exports.publicRouter.get("/cicipin/users", users_controllers_1.UsersController.getAllUsers);
exports.publicRouter.get("/cicipin/users/:id", users_controllers_1.UsersController.getUserById);
exports.publicRouter.post("/cicipin/users/register", users_controllers_1.UsersController.register);
exports.publicRouter.post("/cicipin/users/login", users_controllers_1.UsersController.login);
exports.publicRouter.post("/cicipin/users/logout", users_controllers_1.UsersController.logout);
exports.publicRouter.put("/cicipin/users/:id", users_controllers_1.UsersController.updateUser);
exports.publicRouter.delete("/cicipin/users/:id", users_controllers_1.UsersController.deleteUser);
exports.publicRouter.get("/cicipin/users/usersRestaurants/:id", users_controllers_1.UsersController.getUserRestaurants);
// Restaurants
exports.publicRouter.get("/cicipin/restaurants", restaurants_controllers_1.RestaurantsController.getAllRestaurants);
exports.publicRouter.get("/cicipin/restaurants/:id", restaurants_controllers_1.RestaurantsController.getRestaurantById);
exports.publicRouter.post("/cicipin/restaurants", restaurants_controllers_1.RestaurantsController.createRestaurant);
exports.publicRouter.put("/cicipin/restaurants/:id", restaurants_controllers_1.RestaurantsController.updateRestaurant);
exports.publicRouter.delete("/cicipin/restaurants/:id", restaurants_controllers_1.RestaurantsController.deleteRestaurant);
// Menu Categories
exports.publicRouter.get("/cicipin/menuCategories", menucategories_controllers_1.MenuCategoriesController.getAllMenuCategories);
exports.publicRouter.get("/cicipin/menuCategories/:id", menucategories_controllers_1.MenuCategoriesController.getMenuCategoryById);
exports.publicRouter.post("/cicipin/menuCategories", menucategories_controllers_1.MenuCategoriesController.createMenuCategory);
exports.publicRouter.put("/cicipin/menuCategories/:id", menucategories_controllers_1.MenuCategoriesController.updateMenuCategory);
exports.publicRouter.delete("/cicipin/menuCategories/:id", menucategories_controllers_1.MenuCategoriesController.deleteMenuCategory);
// Restaurant Categories
exports.publicRouter.get("/cicipin/restaurantCategories", restaurantcategories_controllers_1.RestaurantCategoryController.getAllRestaurantCategories);
exports.publicRouter.get("/cicipin/restaurantCategories/:id", restaurantcategories_controllers_1.RestaurantCategoryController.getRestaurantCategoryById);
exports.publicRouter.post("/cicipin/restaurantCategories", restaurantcategories_controllers_1.RestaurantCategoryController.createRestaurantCategory);
exports.publicRouter.put("/cicipin/restaurantCategories/:id", restaurantcategories_controllers_1.RestaurantCategoryController.updateRestaurantCategory);
exports.publicRouter.delete("/cicipin/restaurantCategories/:id", restaurantcategories_controllers_1.RestaurantCategoryController.deleteRestaurantCategory);
// Reviews
exports.publicRouter.get("/cicipin/reviews", reviews_controllers_1.ReviewsController.getAllReviews);
exports.publicRouter.get("/cicipin/reviews/:id", reviews_controllers_1.ReviewsController.getReviewById);
exports.publicRouter.post("/cicipin/reviews", reviews_controllers_1.ReviewsController.createReview);
exports.publicRouter.put("/cicipin/reviews/:id", reviews_controllers_1.ReviewsController.updateReview);
exports.publicRouter.delete("/cicipin/reviews/:id", reviews_controllers_1.ReviewsController.deleteReview);
// Review Images
exports.publicRouter.get("/cicipin/reviewImages", reviewimages_controllers_1.ReviewImagesController.getAllReviewImages);
exports.publicRouter.get("/cicipin/reviewImages/:id", reviewimages_controllers_1.ReviewImagesController.getReviewImageById);
exports.publicRouter.post("/cicipin/reviewImages", reviewimages_controllers_1.ReviewImagesController.createReviewImage);
exports.publicRouter.put("/cicipin/reviewImages/:id", reviewimages_controllers_1.ReviewImagesController.updateReviewImage);
exports.publicRouter.delete("/cicipin/reviewImages/:id", reviewimages_controllers_1.ReviewImagesController.deleteReviewImage);
// Restaurant Images
exports.publicRouter.get("/cicipin/restaurantImages", retaurantimages_controllers_1.RestaurantImageController.getAllRestaurantImages);
exports.publicRouter.get("/cicipin/restaurantImages/:id", retaurantimages_controllers_1.RestaurantImageController.getRestaurantImageById);
exports.publicRouter.post("/cicipin/restaurantImages", retaurantimages_controllers_1.RestaurantImageController.createRestaurantImage);
exports.publicRouter.put("/cicipin/restaurantImages/:id", retaurantimages_controllers_1.RestaurantImageController.updateRestaurantImage);
exports.publicRouter.delete("/cicipin/restaurantImages/:id", retaurantimages_controllers_1.RestaurantImageController.deleteRestaurantImage);
// Restaurant Category Pairings
exports.publicRouter.get("/cicipin/restaurantCategoryPairings", restaurantcategoriespairing_controllers_1.RestaurantCategoryPairingController.getAllRestaurantCategoryPairings);
exports.publicRouter.get("/cicipin/restaurantCategoryPairings/:id", restaurantcategoriespairing_controllers_1.RestaurantCategoryPairingController.getRestaurantCategoryPairingById);
exports.publicRouter.post("/cicipin/restaurantCategoryPairings", restaurantcategoriespairing_controllers_1.RestaurantCategoryPairingController.createRestaurantCategoryPairing);
exports.publicRouter.put("/cicipin/restaurantCategoryPairings/:id", restaurantcategoriespairing_controllers_1.RestaurantCategoryPairingController.updateRestaurantCategoryPairing);
exports.publicRouter.delete("/cicipin/restaurantCategoryPairings/:id", restaurantcategoriespairing_controllers_1.RestaurantCategoryPairingController.deleteRestaurantCategoryPairing);
// Review User
exports.publicRouter.get("/cicipin/reviewUsers", reviewUsers_controllers_1.ReviewUserController.getReviewUsers);
exports.publicRouter.get("/cicipin/reviewUsers/:id", reviewUsers_controllers_1.ReviewUserController.getReviewUserById);
exports.publicRouter.post("/cicipin/reviewUsers", reviewUsers_controllers_1.ReviewUserController.createReviewUser);
exports.publicRouter.put("/cicipin/reviewUsers/:id", reviewUsers_controllers_1.ReviewUserController.updateReviewUser);
exports.publicRouter.delete("/cicipin/reviewUsers/:id", reviewUsers_controllers_1.ReviewUserController.deleteReviewUser);
