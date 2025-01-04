import { MenuCategories, MenuCategoriesPairings } from "@prisma/client";

export interface createMenuCategoryPairing{
    id: number;
    menuID: number;
    MenuCategoriesID: number;
}

export interface requestMenuCategoryPairing{
    id: number;
    menuID: number;
    MenuCategoriesID: number;
}

export interface responseMenuCategoryPairing{
    id: number;
    menuID: number;
    MenuCategoriesID: number;
    menuCategories: MenuCategories;
}

export function toMenuCategoryPairingResponse(menuCategoriesPairings: MenuCategoriesPairings & { menuCategories: MenuCategories }) {
    return {
        id: menuCategoriesPairings.id,
        menuID: menuCategoriesPairings.menuID,
        MenuCategoriesID: menuCategoriesPairings.MenuCategoriesID,
        menuCategories: menuCategoriesPairings.menuCategories, // Include the related menuCategories field
    };
}



export interface updateMenuCategoryPairing{
    id: number;
    menuID: number;
    MenuCategoriesID: number;
}

export interface deleteMenuCategoryPairing{
    id: number;
    menuID: number;
    MenuCategoriesID: number;
}