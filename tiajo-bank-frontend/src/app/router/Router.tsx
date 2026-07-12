import {Navigate,Route,Routes} from "react-router-dom";

import LayoutPublic from "../../public-site/layout/PublicLayout";
import LayoutAuth from "../../layouts/LayoutAuth";


import InicioPage from "../../public-site/pages/inicio/InicioPage";
import QueEsPage from "../../public-site/pages/que-es/QueEsPage";
import BenefitsPage from "../../public-site/pages/beneficios/BenefitsPage";
import FeaturesPage from "../../public-site/pages/funcionalidades/FeaturesPage";

import AccederPage from "../../modules/auth/AccederPage";
import IniciarSesionPage from "../../modules/auth/IniciarSesionPage";
import QrAccessPage from "../../modules/auth/QrAccessPage";
import OtroAccesoPage from "../../modules/auth/OtroAccesoPage";

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

                
            </Route>

            <Route path="*" element={<Navigate to="/es" replace />} />
        </Routes> 
    );
}