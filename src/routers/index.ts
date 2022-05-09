import UsersPage from "../pages/UsersPage/UsersPage";
import UserInfoPage from "../pages/UserInfoPage/UserInfoPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import React from "react";

export interface IRoute {
    path: string;
    element: React.ComponentType ;
}

export enum RoutePaths {
    ROOT = '/',
    USERS = '/users',
    USERS_ID = '/users/:id',
    PAGE_NOT_FOUND = '/page_not_found',
}

export const publicRoutes: IRoute[] = [
    {path: RoutePaths.USERS, element: UsersPage},
    {path: RoutePaths.USERS_ID, element: UserInfoPage},
    {path: RoutePaths.ROOT, element: UsersPage},
    {path: RoutePaths.PAGE_NOT_FOUND, element: NotFoundPage},
]
