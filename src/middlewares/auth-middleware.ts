import { Response, NextFunction } from "express"
import { prismaClient } from "../application/database"
import { UserRequest } from "../types/user-request"

export const authMiddleware = async (
    req: UserRequest,
    res: Response,
    next: NextFunction
) => {
    const token = req.get("X-API-TOKEN")

    if (token) {
        const user = await prismaClient.users.findFirst({
            where: {
                token: token,
            },
        })

        if (user) {
            req.Users = user
            next()
            return
        }
    }

    res.status(401)
        .json({
            errors: "Unauthorized",
        })
        .end()
}