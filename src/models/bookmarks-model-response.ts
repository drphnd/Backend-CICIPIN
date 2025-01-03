import { Bookmarks } from "@prisma/client";
import e from "express";

export interface createBookmark{
    isBookmarked: boolean;
    UsersID: number;
    RestaurantsID: number;
}

export interface requestBookmark{
    isBookmarked: boolean;
    UsersID: number;
    RestaurantsID: number;
}

export interface responseBookmark{
    id: number;
    isBookmarked: boolean;
    UsersID: number;
    RestaurantsID: number;
}

export function toBookmarkResponse(bookmarks: Bookmarks){
    return {
        id: bookmarks.id,
        isBookmarked: bookmarks.isBookmarked,
        UsersID: bookmarks.UsersID,
        RestaurantsID: bookmarks.RestaurantsID
    }
}

export interface updateBookmark{
    id: number;
    isBookmarked: boolean;
}

