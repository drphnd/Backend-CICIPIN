import { Users } from "@prisma/client";
import { Request } from "express";

export interface UserRequest extends Request {
    Users?: Users;
}