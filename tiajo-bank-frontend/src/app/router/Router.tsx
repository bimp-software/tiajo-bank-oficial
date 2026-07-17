import {Navigate,Route,Routes} from "react-router-dom";

import LayoutPublic from "../../public-site/layout/PublicLayout";
import LayoutAuth from "../../layouts/LayoutAuth";
import LayoutDashboard from "../../layouts/LayoutDashboard";

import InicioPage from "../../public-site/pages/inicio/InicioPage";
import QueEsPage from "../../public-site/pages/que-es/QueEsPage";
import BenefitsPage from "../../public-site/pages/beneficios/BenefitsPage";
import FeaturesPage from "../../public-site/pages/funcionalidades/FeaturesPage";

import AccederPage from "../../modules/auth/AccederPage";
import IniciarSesionPage from "../../modules/auth/IniciarSesionPage";
import QrAccessPage from "../../modules/auth/QrAccessPage";
import OtroAccesoPage from "../../modules/auth/OtroAccesoPage";
import StudentAccessPage from "../../modules/auth/StudentAccessPage";
import GuardianLoginPage from "../../modules/auth/GuardianLoginPage";
import TeacherCommunityPage from "../../modules/auth/TeacherCommunityPage";
import FoundationsPage from "../../modules/auth/FoundationsPage";
import InstitutionsPage from "../../modules/auth/InstitutionsPage";

import Index from "../../modules/dashboard/pages/Index";
import ActividadPage from "../../modules/dashboard/pages/educacion/ActividadPage";
import MaterialEducativoPage from "../../modules/dashboard/pages/educacion/MaterialEducativoPage";
import LaboratorioVirtualPage from "../../modules/dashboard/pages/educacion/LaboratorioVirtualPage";
import EvaluacionesPage from "../../modules/dashboard/pages/educacion/EvaluacionesPage";
import InsigniasPage from "../../modules/dashboard/pages/gamificacion/InsigniasPage";
import LigasTemporadasPage from "../../modules/dashboard/pages/gamificacion/LigasTemporadasPage";
import MiRanitaPage from "../../modules/dashboard/pages/gamificacion/MiRanitaPage";
import MundoVirtualPage from "../../modules/dashboard/pages/gamificacion/mundo-virtual/MundoVirtualPage";

export default function Router(){
    return (
       <Routes>
            <Route path="/" element={<Navigate to="/es" replace/>} />

            <Route path="/:lang" element={< LayoutPublic />}>
                <Route index element={<InicioPage />} />
                <Route path="que-es" element={<QueEsPage />}/>
                <Route path="beneficios" element={<BenefitsPage/>}/>
                <Route path="funcionalidades" element={<FeaturesPage/>}/>
            </Route>

            <Route path="/:lang/acceder" element={<LayoutAuth/>}>
                <Route index element={<AccederPage/>} />
                <Route path="iniciar-sesion" element={<IniciarSesionPage/>} />
                <Route path="codigo-qr" element={<QrAccessPage/>} />
                <Route path="otro-acceso" element={<OtroAccesoPage/>} />
                <Route path="estudiante" element={<StudentAccessPage/>} />
                <Route path="apoderado" element={<GuardianLoginPage/>} />
                <Route path="comunidad-docente" element={<TeacherCommunityPage/>} />
                <Route path="fundaciones-asociaciones" element={<FoundationsPage/>} />
                <Route path="instituciones" element={<InstitutionsPage/>} />
            </Route>

            <Route path="/:lang/:accessCode/" element={<LayoutDashboard />}>
                <Route index element={<Index />} />
                <Route path="dashboard" element={<Index />} />

                <Route path="gestion-educativa">
                    <Route path="actividades" element={<ActividadPage />} />
                    <Route path="material-educativo" element={<MaterialEducativoPage />} />
                    <Route path="laboratorio-virtual" element={<LaboratorioVirtualPage />} />
                    <Route path="evaluaciones" element={<EvaluacionesPage />} />
                </Route>

                <Route path="experiencia-estudiantil">
                    <Route path="insignias" element={<InsigniasPage />} />
                    <Route path="ligas-temporadas" element={<LigasTemporadasPage />} />
                    <Route path="mi-ranita" element={<MiRanitaPage />} />
                    <Route path="mundo-virtual" element={<MundoVirtualPage />} />
                </Route>

            </Route>

            <Route path="*" element={<Navigate to="/es" replace />} />
        </Routes> 
    );
}