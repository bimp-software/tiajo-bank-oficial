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

            <Route path="/:lang/:accessCode/dashboard" element={<LayoutDashboard />}>
                <Route index element={<Index />} />
            </Route>

            <Route path="*" element={<Navigate to="/es" replace />} />
        </Routes> 
    );
}