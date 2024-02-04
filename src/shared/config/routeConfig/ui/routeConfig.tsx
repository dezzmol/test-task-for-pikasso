import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {PostPage} from "pages/PostPage";

export enum AppRoutes {
    MAIN = 'main',
    POST = 'post',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.POST]: '/post/:postId',

    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.POST]: {
        path: RoutePath.post,
        element: <PostPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <MainPage />,
    },
};