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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_service_1 = require("../validations/user-service");
const user_model_response_1 = require("../models/user-model-response");
const validation_1 = require("../validations/validation");
const database_1 = require("../application/database");
const response_error_1 = require("../errors/response-error");
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
class UserService {
    static getAllUsers(users) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllUsers = yield database_1.prismaClient.users.findMany({
                where: {
                    id: users.id,
                },
            });
            return "Get Data was successful!";
        });
    }
    static getUserById(users) {
        return __awaiter(this, void 0, void 0, function* () {
            const getUserById = yield database_1.prismaClient.users.findUnique({
                where: {
                    id: users.id,
                },
            });
            return "Get User By Id";
        });
    }
    // tidak dipakai karena agaknya salah nih
    // static async createUser(requestUser: requestUser): Promise<string> {
    //   // validate the request
    //   const validateRequest = Validation.validate(
    //     userValidation.REGISTER,
    //     requestUser
    //   );
    //   await prismaClient.users.create({
    //     data: {
    //       name: validateRequest.name,
    //       role: validateRequest.role,
    //       username: validateRequest.username,
    //       password: validateRequest.password,
    //       email: validateRequest.email,
    //       profile_picture: validateRequest.profile_picture,
    //     },
    //   });
    //   return "Create User";
    // }
    static register(requestUser) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(user_service_1.userValidation.REGISTER, requestUser);
            const email = yield database_1.prismaClient.users.findFirst({
                where: {
                    email: validateRequest.email
                }
            });
            if (email) {
                throw new response_error_1.ResponseError(404, "Email already exists");
            }
            const username = yield database_1.prismaClient.users.findFirst({
                where: {
                    username: validateRequest.username
                }
            });
            if (username) {
                throw new response_error_1.ResponseError(404, "Username already exists");
            }
            validateRequest.password = yield bcrypt_1.default.hash(validateRequest.password, 10);
            // add the user to the database
            const user = yield database_1.prismaClient.users.create({
                data: {
                    name: validateRequest.name,
                    role: validateRequest.role,
                    username: validateRequest.username,
                    password: validateRequest.password,
                    email: validateRequest.email,
                    profile_picture: validateRequest.profile_picture,
                    token: (0, uuid_1.v4)()
                },
            });
            return (0, user_model_response_1.toUserResponse)(user);
        });
    }
    static login(requestUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const loginReq = validation_1.Validation.validate(user_service_1.userValidation.LOGIN, requestUser);
            let user = yield database_1.prismaClient.users.findFirst({
                where: {
                    username: loginReq.username
                }
            });
            if (!user) {
                throw new response_error_1.ResponseError(404, "Username incorrect");
            }
            const passwordMatch = yield bcrypt_1.default.compare(loginReq.password, user.password);
            if (!passwordMatch) {
                throw new response_error_1.ResponseError(404, "Password is incorrect");
            }
            user = yield database_1.prismaClient.users.update({
                where: {
                    id: user.id,
                },
                data: {
                    token: (0, uuid_1.v4)()
                }
            });
            return (0, user_model_response_1.toUserResponse)(user);
        });
    }
    static logout(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const logoutUser = yield database_1.prismaClient.users.update({
                where: {
                    id: user.id,
                },
                data: {
                    token: null
                }
            });
            return "Logout Successful";
        });
    }
    static updateUser(UpdateUser) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(user_service_1.userValidation.UPDATE, UpdateUser);
            // add the user to the database
            const updateUser = yield database_1.prismaClient.users.update({
                where: {
                    id: UpdateUser.id,
                },
                data: {
                    name: validateRequest.name,
                    role: validateRequest.role,
                    username: validateRequest.username,
                    password: validateRequest.password,
                    email: validateRequest.email,
                    profile_picture: validateRequest.profile_picture,
                },
            });
            return (0, user_model_response_1.toUpdateUserResponse)(updateUser);
        });
    }
    static deleteUser(deleteUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteUserById = yield database_1.prismaClient.users.delete({
                where: {
                    id: deleteUser.id,
                },
            });
            return "Delete User";
        });
    }
    static getUserRestaurants() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.prismaClient.users.findMany({
                include: { restaurants: true },
            });
            return users.map((user) => ({
                id: user.id,
                username: user.username,
                name: user.name,
                restaurants: user.restaurants.map((restaurant) => ({
                    id: restaurant.id,
                    name: restaurant.name,
                    address: restaurant.address,
                    longtitude: restaurant.longtitude,
                    latitude: restaurant.latitude,
                    description: restaurant.description,
                })),
            }));
        });
    }
}
exports.UserService = UserService;
