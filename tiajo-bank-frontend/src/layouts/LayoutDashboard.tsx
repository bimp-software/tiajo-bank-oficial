import {
    Outlet,
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    useCallback,
    useEffect,
} from "react";

import i18n from "../app/i18n";

/* AdminLTE */
import "../shared/assets/styles/dashboard/adminlte.min.css";
import "../shared/assets/js/dashboard/adminlte.min.js";

/* Bootstrap Icons */
import "../shared/assets/styles/bootstrap-icons.min.css";

/* Estilos del dashboard */
import "../shared/assets/styles/dashboard/main.css";
import "../shared/assets/styles/dashboard/navbar.css";
import "../shared/assets/styles/dashboard/footer.css";
import "../shared/assets/styles/dashboard/logout.css";

/* Componentes compartidos */
import Navbar from "../shared/components/layout/Navbar";
import Sidebar from "../shared/components/layout/Sidebar";
import Breadcrumbs from "../shared/components/layout/Breadcrumbs";
import Footer from "../shared/components/layout/Footer";
import ModalCerrarSesion from "../shared/components/modals/ModalCerrarSesion";

/* Hooks */
import useSessionTimeout from "../app/hooks/useSessionTimeout";

export default function LayoutDashboard() {
    const navigate = useNavigate();

    const { lang = "es" } = useParams<{
        lang: string;
    }>();

    useEffect(() => {
        const bodyClasses = [
            "layout-fixed",
            "sidebar-expand-lg",
            "bg-body-tertiary",
        ];

        document.body.classList.add(...bodyClasses);

        void i18n.changeLanguage(lang);

        return () => {
            document.body.classList.remove(...bodyClasses);
        };
    }, [lang]);

    const handleSessionLogout = useCallback(
        async (): Promise<void> => {
            navigate(`/${lang}/acceder`, {
                replace: true,
            });
        },
        [lang, navigate],
    );

    useSessionTimeout({
        inactivityMinutes: 15,
        warningSeconds: 60,
        onLogout: handleSessionLogout,
    });

    return (
        <div className="app-wrapper">
            <Navbar />
            <Sidebar />
            <main className="app-main">
                <div className="app-content-header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <h2 className="mb-0">
                                    Dashboard
                                </h2>
                            </div>

                            <div className="col-sm-6">
                                <Breadcrumbs />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-content">
                    <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>
            </main>

            <Footer />

            <ModalCerrarSesion />
        </div>
    );
}