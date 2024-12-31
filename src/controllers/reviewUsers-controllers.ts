import { Request, Response } from "express";
import { ReviewUserService } from "../services/auth-reviewusers-service";

export class ReviewUserController {
    static async getReviewUsers(req: Request, res: Response) {
        const reviewUsers = await ReviewUserService.getReviewUsers();
        res.status(200).json(reviewUsers);
    }

    static async getReviewUserById(req: Request, res: Response) {
        const reviewUsers = await ReviewUserService.getReviewUserById(req.body);
        res.status(200).json(reviewUsers);
    }

    static async createReviewUser(req: Request, res: Response) {
        const reviewUsers = await ReviewUserService.createReviewUser(req.body);
        res.status(201).json(reviewUsers);
    }

    static async updateReviewUser(req: Request, res: Response) {
        const reviewUsers = await ReviewUserService.updateReviewUser( req.body);
        res.status(200).json(reviewUsers);
    }

    static async deleteReviewUser(req: Request, res: Response) {
        const reviewUsers = await ReviewUserService.deleteReviewUser(req.body);
        res.status(200).json(reviewUsers);
    }
}