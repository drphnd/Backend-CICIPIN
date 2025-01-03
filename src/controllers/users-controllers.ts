import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/auth-user-service";
import { createUser, requestUser, responseUser, updateUser, deleteUser, loginRequest } from "../models/user-model-response";
import { request } from "http";
import { UserRequest } from "../types/user-request";



export class UsersController {
    static async getAllUsers(req: Request, res: Response) {
        const users = await UserService.getAllUsers(req.body);
        res.status(200).json(users);
    }

    static async getUserById(req: Request, res: Response) {
        const users = await UserService.getUserById(req.body);
        res.status(200).json(users);
    }

    static async register(req: Request, res: Response, next: NextFunction) {
        try{
            const request: requestUser = req.body as requestUser;
            const response = await UserService.register(request);
            res.status(201).json({
                data: response
            })
        }catch(error){
            next(error);
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try{
            const request: loginRequest = req.body as loginRequest;
            const response = await UserService.login(request);
            res.status(200).json({
                data: response
            })
        }catch(error){
            next(error);
        }
    }

    static async logout(req: UserRequest, res: Response, next: NextFunction) {
        try{
            const response = await UserService.logout(req.Users!);
            res.status(200).json({
                data: response
            })
        }catch(error){
            next(error);
        }
    }

    static async updateUser(req: Request, res: Response) {
        const users  = await UserService.updateUser(req.body);
        res.status(200).json(users)
    }

    static async deleteUser(req: Request, res: Response) {
        const users = await UserService.deleteUser(req.body);
        res.status(200).json(users);
    }

    static async getUserRestaurants(req: Request, res: Response) {
        const usersWithRestaurants = await UserService.getUserRestaurants();
            res.status(200).json(usersWithRestaurants);
    }
}