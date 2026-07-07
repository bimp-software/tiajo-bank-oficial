import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; 

import { LANG } from "../../app/config/lang";

import Logo from "../../shared/assets/icons/logo-tiajobank.webp";
 
export default function Navbar(){

    const { t, i18n } = useTranslation("navbar");

    const currentLanguage =
        LANG.find((l) => l.code === i18n.resolvedLanguage) ?? LANG[0];

    const changeLanguage = (code: string) => {
        i18n.changeLanguage(code);
    };

    return(
        <nav className="navbar navbar-expand-lg bg-tj sticky-top shadow" aria-label={t("navbar.menu_prinicipal")}>
            <div className="container-xl py-1">
                <Link className="navbar-brand p-0 m-0" to={`/inicio`}>
                    <img src={Logo} alt="TíaJo Bank" className="tj-logo-img"/>
                </Link>

                <button className="navbar-toggler border-2 bg-success text-white rounded-2 px-2" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navMain" aria-controls="navMain" aria-expanded="false"
                    aria-label={t("abrir_menu")}>
                    <i className="bi bi-list fs-4"></i>
                </button>

                <div className="collapse navbar-collapse" id="navMain">
                     <ul className="navbar-nav tj-nav mx-auto gap-2 py-2 py-lg-3">
                        <li className="nav-item">
                            <NavLink to={`/inicio`} end className={({ isActive }) => `nav-link px-2 py-2 ${isActive ? "active" : ""}` }>
                                {t("inicio")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={`/que-es`} className={({ isActive }) => `nav-link px-2 py-2 ${isActive ? "active" : ""}` }>
                                {t("que_es")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={`/beneficios`} className={({ isActive }) => `nav-link px-2 py-2 ${isActive ? "active" : ""}` }>
                                {t("beneficios")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={`/funcionalidades`} className={({ isActive }) => `nav-link px-2 py-2 ${isActive ? "active" : ""}` }>
                                {t("funcionalidades")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={`/planes`} className={({ isActive }) => `nav-link px-2 py-2 ${isActive ? "active" : ""}` }>
                                {t("planes")}
                            </NavLink>
                        </li>
                    </ul>

                    <div className="dropdown mx-auto gap-1 py-2">

                        <button className="btn dropdown-toggle text-white border-0 px-3 py-2 d-flex align-items-center gap-2"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false"
                            aria-label={t("idioma")}>
                            <i className="bi bi-globe-americas"></i>
                            <span>{currentLanguage.flag} {currentLanguage.label}</span>
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-4">
                            {LANG.map(language => (
                                <li key={language.code}>
                                    <button
                                        className={`dropdown-item py-2 ${
                                            i18n.resolvedLanguage === language.code ? "active" : ""
                                        }`}
                                        onClick={() => changeLanguage(language.code)}
                                    >
                                        {language.flag} {language.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className="d-flex flex-column flex-lg-row gap-2 pb-2 pb-lg-0">
                        <Link to={`acceder`} className="btn btn-tj-outline btn-sm px-3">
                            {t("iniciar_sesion")}
                        </Link>
                        <Link to={`/registrarse`} className="btn btn-tj-cta btn-sm px-3">
                            {t("comenzar")}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}