/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

const InicioPage = lazy(() => import("../../../pages/public/inicio/InicioPage"))
const QueEsPage = lazy(() => import("../../../pages/public/que-es/QueEsPage"))
const BeneficiosPage = lazy(() => import("../../../pages/public/beneficios/BeneficiosPage"))
const FuncionalidadesPage = lazy(() => import("../../../pages/public/funcionalidades/FuncionalidadesPage"))
const PlanesPage = lazy(() => import("../../../pages/public/planes/PlanesPage"))

export const publicRoutes: RouteObject[] = [
    { index: true, element: <InicioPage /> },   
    { path: "que-es", element: <QueEsPage/> },
    { path: "beneficios", element: <BeneficiosPage/> },
    { path: "funcionalidades", element: <FuncionalidadesPage/> },
    { path: "planes", element: <PlanesPage/> }
];