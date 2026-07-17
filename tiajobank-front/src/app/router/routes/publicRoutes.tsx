/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

const InicioPage = lazy(() => import("../../../pages/public/inicio/InicioPage"));

export const publicRoutes: RouteObject[] = [
    { index: true, element: <InicioPage /> },   
];