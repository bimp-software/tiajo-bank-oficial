import {Navigate,Route,Routes} from "react-router-dom";
import LayoutPublic from "../../public-site/layout/PublicLayout";
import InicioPage from "../../public-site/pages/inicio/InicioPage";

export default function Router(){
    return (
       <Routes>
            <Route path="/" element={<Navigate to="es" replace/>} />

            <Route path="/:lang" element={< LayoutPublic />}>
                <Route index element={<InicioPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/es" replace />} />
        </Routes> 
    );
}