/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

const InicioPage = lazy(() => import("../../../pages/public/inicio/InicioPage"))
const QueEsPage = lazy(() => import("../../../pages/public/que-es/QueEsPage"))
const BeneficiosPage = lazy(() => import("../../../pages/public/beneficios/BeneficiosPage"))
const FuncionalidadesPage = lazy(() => import("../../../pages/public/funcionalidades/FuncionalidadesPage"))
const PlanesPage = lazy(() => import("../../../pages/public/planes/PlanesPage"))
const RecursosPage = lazy(() => import("../../../pages/public/recursos/RecursosPage"))
const SeguridadPage = lazy(() => import("../../../pages/public/seguridad/SeguridadPage"))
const BlogPage = lazy(() => import("../../../pages/public/blog/BlogPage"))
const GuiasPage = lazy(() => import("../../../pages/public/guias/GuiasPage"))
const FaqPage = lazy(() => import("../../../pages/public/faq/PreguntasFrecuentesPage"))
const AyudaPage = lazy(() => import("../../../pages/public/ayuda/CentroAyudaPage"))
const NosotrosPage = lazy(() => import("../../../pages/public/sobre-nosotros/SobreNosotrosPage"))
const ContactoPage = lazy(() => import("../../../pages/public/contacto/ContactoPage"))
const TrabajoPage = lazy(() => import("../../../pages/public/trabaja-con-nosotros/TrabajaConNosotrosPage"))
const PoliticasPage = lazy(() => import("../../../pages/public/politicas/PoliticasPage"))
const PoliticasPrivacidadPage = lazy(() => import("../../../pages/public/politica-privacidad/PoliticaPrivacidadPage"))
const TerminosCondicionesPage = lazy(() => import("../../../pages/public/terminos-condiciones/TerminosCondicionesPage"))
const PoliticaUsoAceptablePage = lazy(() => import("../../../pages/public/politica-uso-aceptable/PoliticaUsoAceptablePage"))
const ProteccionMenoresPage = lazy(() => import("../../../pages/public/proteccion-de-menores/PoliticaProteccionMenoresPage"))
const CookiesPage = lazy(() => import("../../../pages/public/cookies/PoliticaCookiesPage"))
const PropiedadIntelectualPage = lazy(() => import("../../../pages/public/propiedad-intelectual/PoliticaPropiedadIntelectualPage"))
const ComprasReembolsosPage = lazy(() => import("../../../pages/public/compras-reembolsos/PoliticaComprasReembolsosPage"))
const ComunicacionesPage = lazy(() => import("../../../pages/public/compras-reembolsos/PoliticaComprasReembolsosPage"))
const HistoriaPage = lazy(() => import("../../../pages/public/historia/ConoceNuestraHistoriaPage"))

export const publicRoutes: RouteObject[] = [
    { index: true, element: <InicioPage /> },   
    { path: "que-es", element: <QueEsPage/> },
    { path: "beneficios", element: <BeneficiosPage/> },
    { path: "funcionalidades", element: <FuncionalidadesPage/> },
    { path: "planes", element: <PlanesPage/> },
    { path: "recursos", element: <RecursosPage/> },
    { path: "seguridad", element: <SeguridadPage/> },
    { path: "blog", element: <BlogPage/> },
    { path: "guias", element: <GuiasPage/> },
    { path: "faq", element: <FaqPage/> },
    { path: "ayuda", element: <AyudaPage/> },
    { path: "nosotros", element: <NosotrosPage/> },
    { path: "nosotros/historia", element: <HistoriaPage/> },
    { path: "contacto", element: <ContactoPage/> },
    { path: "trabajo", element: <TrabajoPage/> },
    { path: "politicas", element: <PoliticasPage/> },
    { path: "politicas/terminos", element: <TerminosCondicionesPage/> },
    { path: "politicas/privacidad", element: <PoliticasPrivacidadPage/> },
    { path: "politicas/uso-aceptable", element: <PoliticaUsoAceptablePage/> },
    { path: "politicas/proteccion-de-menores", element: <ProteccionMenoresPage/> },
    { path: "politicas/cookies", element: <CookiesPage/> },
    { path: "politicas/intelectual", element: <PropiedadIntelectualPage/> },
    { path: "politicas/compras-y-reembolsos", element: <ComprasReembolsosPage/> },
    { path: "politicas/comunicaciones", element: <ComunicacionesPage/> },
    { path: "centro-ayuda", element: <AyudaPage/> },
];